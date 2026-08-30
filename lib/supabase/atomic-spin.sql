create or replace function public.commit_spin_result(
  p_token_hash text,
  p_prize_id text,
  p_prize_label text,
  p_prize_amount text,
  p_committed_at timestamptz
)
returns table (
  ok boolean,
  code text,
  session_id uuid,
  voucher_id uuid,
  prize_id text,
  prize_label text,
  prize_amount text,
  consumed_at timestamptz
)
language plpgsql
security definer
set search_path = public
as $$
declare
  target_session public.spin_sessions%rowtype;
begin
  select *
  into target_session
  from public.spin_sessions
  where token_hash = p_token_hash
  for update;

  if not found then
    return query
    select false, 'invalid_session', null::uuid, null::uuid, null::text, null::text, null::text, null::timestamptz;
    return;
  end if;

  if target_session.expires_at <= now() then
    return query
    select false, 'expired_session', target_session.id, target_session.voucher_id, target_session.prize_id, target_session.prize_label, target_session.prize_amount, target_session.consumed_at as consumed_at;
    return;
  end if;

  if target_session.consumed_at is not null then
    return query
    select true, 'already_spun', target_session.id, target_session.voucher_id, target_session.prize_id, target_session.prize_label, target_session.prize_amount, target_session.consumed_at as consumed_at;
    return;
  end if;

  update public.vouchers
  set
    used_at = p_committed_at,
    used_by_session_id = target_session.id
  where id = target_session.voucher_id
    and used_at is null;

  if not found then
    return query
    select false, 'voucher_already_used', target_session.id, target_session.voucher_id, null::text, null::text, null::text, null::timestamptz;
    return;
  end if;

  update public.spin_sessions
  set
    consumed_at = p_committed_at,
    prize_id = p_prize_id,
    prize_label = p_prize_label,
    prize_amount = p_prize_amount
  where id = target_session.id
    and consumed_at is null
  returning *
  into target_session;

  if not found then
    return query
    select false, 'session_commit_failed', null::uuid, null::uuid, null::text, null::text, null::text, null::timestamptz;
    return;
  end if;

  return query
  select true, 'committed', target_session.id, target_session.voucher_id, target_session.prize_id, target_session.prize_label, target_session.prize_amount, target_session.consumed_at as consumed_at;
end;
$$;
