import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import { Typography } from '@mui/material'
import {
  Cards,
  EmptyState,
  MetaRow,
  Section,
  SectionHeader,
  WinnerCard,
  WinnerMark,
} from './styles'

export interface LandingWinner {
  id: string
  prizeLabel: string
  consumedAt: string
  voucherCode: string
}

interface WinnersProps {
  winners: LandingWinner[]
}

function formatWinnerTime(consumedAt: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(consumedAt))
}

export default function Winners({ winners }: WinnersProps) {
  return (
    <Section>
      <SectionHeader>
        <Typography
          variant="overline"
          sx={{
            color: '#A78BFA',
            fontWeight: 800,
            letterSpacing: '0.14em',
          }}
        >
          RECENT WINNERS
        </Typography>

        <Typography
          variant="h3"
          sx={{
            mt: 1,
            fontSize: { xs: 30, sm: 38 },
          }}
        >
          Real spins. Real prize reveals.
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            color: 'text.secondary',
            lineHeight: 1.7,
          }}
        >
          Live redemptions from verified vouchers appear here as winners complete
          their spin.
        </Typography>
      </SectionHeader>

      {winners.length > 0 ? (
        <Cards>
          {winners.map((winner) => (
            <WinnerCard key={winner.id}>
              <WinnerMark>
                <WorkspacePremiumOutlinedIcon />
              </WinnerMark>

              <Typography
                aria-hidden="true"
                className="winner-burst"
                component="span"
              >
                🎉
              </Typography>

              <Typography sx={{ color: '#7F8AA5', fontSize: 12, fontWeight: 700 }}>
                Voucher {winner.voucherCode}
              </Typography>

              <Typography
                component="div"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: '#fff',
                  fontSize: { xs: 22, sm: 26 },
                  fontWeight: 900,
                  letterSpacing: '-0.04em',
                  mt: 1,
                }}
              >
                <AutoAwesomeRoundedIcon
                  sx={{
                    fontSize: { xs: 18, sm: 20 },
                    color: '#FFE27A',
                    filter: 'drop-shadow(0 0 10px rgba(255,226,122,0.45))',
                    flexShrink: 0,
                  }}
                />
                <span>{winner.prizeLabel}</span>
              </Typography>

              <MetaRow>
                <AccessTimeOutlinedIcon sx={{ fontSize: 15 }} />
                <span>{formatWinnerTime(winner.consumedAt)}</span>
              </MetaRow>
            </WinnerCard>
          ))}
        </Cards>
      ) : (
        <EmptyState>
          <Typography sx={{ color: '#fff', fontSize: 22, fontWeight: 800, mb: 1 }}>
            Winner board warming up
          </Typography>
          <Typography sx={{ color: '#A7B0C5', fontSize: 15, lineHeight: 1.7 }}>
            Completed spins will appear here automatically once the first verified
            winners redeem their vouchers.
          </Typography>
        </EmptyState>
      )}
    </Section>
  )
}
