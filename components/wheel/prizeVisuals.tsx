'use client'

export interface PrizePalette {
  cardStart: string
  cardMid: string
  cardEnd: string
  glow: string
  badge: string
  valueStart: string
  valueEnd: string
}

export function getPrizePalette(prizeId: string): PrizePalette {
  switch (prizeId) {
    case 'iphone-17-pro-max':
      return {
        cardStart: '#38107A',
        cardMid: '#6C28D9',
        cardEnd: '#1D0B45',
        glow: 'rgba(183,119,255,0.34)',
        badge: 'rgba(195,136,255,0.22)',
        valueStart: 'rgba(216,173,255,0.34)',
        valueEnd: 'rgba(99,58,232,0.26)',
      }
    case 'cash-100':
      return {
        cardStart: '#5B0A46',
        cardMid: '#F72585',
        cardEnd: '#5B082E',
        glow: 'rgba(255,94,174,0.34)',
        badge: 'rgba(255,131,190,0.22)',
        valueStart: 'rgba(255,189,220,0.34)',
        valueEnd: 'rgba(241,59,133,0.26)',
      }
    case 'cash-50':
      return {
        cardStart: '#0E2A7A',
        cardMid: '#2563EB',
        cardEnd: '#0A1E59',
        glow: 'rgba(100,157,255,0.34)',
        badge: 'rgba(125,170,255,0.22)',
        valueStart: 'rgba(190,218,255,0.34)',
        valueEnd: 'rgba(42,110,245,0.26)',
      }
    case 'cash-30':
      return {
        cardStart: '#7A3A05',
        cardMid: '#F59E0B',
        cardEnd: '#5E2400',
        glow: 'rgba(255,192,90,0.34)',
        badge: 'rgba(255,204,102,0.22)',
        valueStart: 'rgba(255,222,151,0.34)',
        valueEnd: 'rgba(243,146,18,0.26)',
      }
    case 'cash-20':
      return {
        cardStart: '#7A123E',
        cardMid: '#EC4899',
        cardEnd: '#5B0A30',
        glow: 'rgba(255,121,184,0.34)',
        badge: 'rgba(255,150,202,0.22)',
        valueStart: 'rgba(255,206,231,0.34)',
        valueEnd: 'rgba(234,77,154,0.26)',
      }
    case 'angpow':
      return {
        cardStart: '#0B6670',
        cardMid: '#14B8A6',
        cardEnd: '#083B40',
        glow: 'rgba(76,228,208,0.34)',
        badge: 'rgba(118,237,220,0.22)',
        valueStart: 'rgba(193,255,246,0.34)',
        valueEnd: 'rgba(24,184,166,0.26)',
      }
    default:
      return {
        cardStart: '#231340',
        cardMid: '#5B21B6',
        cardEnd: '#170D31',
        glow: 'rgba(167,139,250,0.34)',
        badge: 'rgba(167,139,250,0.22)',
        valueStart: 'rgba(255,220,116,0.28)',
        valueEnd: 'rgba(255,122,188,0.22)',
      }
  }
}

export function PrizeMiniIcon({ prizeId }: { prizeId: string }) {
  if (prizeId === 'iphone-17-pro-max') {
    return (
      <svg viewBox="0 0 72 72" width="100%" height="100%" aria-hidden="true">
        <defs>
          <linearGradient id="miniPhoneBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#363E49" />
            <stop offset="100%" stopColor="#0F141C" />
          </linearGradient>
        </defs>
        <rect x="21" y="7" width="30" height="58" rx="9" fill="#0B0F14" />
        <rect x="23.5" y="9.5" width="25" height="53" rx="7" fill="url(#miniPhoneBody)" />
        <circle cx="30" cy="21" r="3.6" fill="#E5EDF6" />
        <circle cx="40" cy="29" r="3.6" fill="#E5EDF6" />
        <circle cx="30" cy="37" r="3.6" fill="#E5EDF6" />
        <rect x="32.5" y="12.5" width="7" height="1.8" rx="0.9" fill="#5B6475" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 72 72" width="100%" height="100%" aria-hidden="true">
      <defs>
        <radialGradient id="miniCoin" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#FFF7D8" />
          <stop offset="38%" stopColor="#F8CA54" />
          <stop offset="70%" stopColor="#D88D17" />
          <stop offset="100%" stopColor="#8A4C07" />
        </radialGradient>
      </defs>
      <circle cx="20" cy="43" r="14" fill="url(#miniCoin)" stroke="#8B4A06" strokeWidth="3" />
      <circle cx="43" cy="26" r="16" fill="url(#miniCoin)" stroke="#8B4A06" strokeWidth="3" />
      <circle cx="47" cy="48" r="12" fill="url(#miniCoin)" stroke="#8B4A06" strokeWidth="3" />
      <text x="20" y="47" fill="#9B530B" fontSize="14" fontWeight="900" textAnchor="middle">
        ₱
      </text>
      <text x="43" y="31" fill="#9B530B" fontSize="16" fontWeight="900" textAnchor="middle">
        ₱
      </text>
      <text x="47" y="52" fill="#9B530B" fontSize="12" fontWeight="900" textAnchor="middle">
        ₱
      </text>
    </svg>
  )
}

export function prizeCardVars(prizeId: string): Record<string, string> {
  const palette = getPrizePalette(prizeId)

  return {
    '--prize-card-start': palette.cardStart,
    '--prize-card-mid': palette.cardMid,
    '--prize-card-end': palette.cardEnd,
    '--prize-glow': palette.glow,
    '--prize-badge': palette.badge,
    '--prize-value-start': palette.valueStart,
    '--prize-value-end': palette.valueEnd,
  }
}
