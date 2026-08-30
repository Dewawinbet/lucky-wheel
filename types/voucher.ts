export interface VoucherValidationResponse {
  valid: boolean
  message: string
}

export interface VoucherRecord {
  id: string
  code: string
  used_at: string | null
  used_by_session_id: string | null
  created_at: string
}

export interface SpinSessionRecord {
  id: string
  voucher_id: string
  token_hash: string
  expires_at: string
  consumed_at: string | null
  prize_id: string | null
  prize_label: string | null
  prize_amount: string | null
  created_at: string
}

export interface AtomicSpinCommitResult {
  ok: boolean
  code:
    | 'committed'
    | 'already_spun'
    | 'invalid_session'
    | 'expired_session'
    | 'voucher_already_used'
    | 'session_commit_failed'
  session_id: string | null
  voucher_id: string | null
  prize_id: string | null
  prize_label: string | null
  prize_amount: string | null
  consumed_at: string | null
}
