export interface Prize {
  id: string
  label: string
  shortLabel: string
  wheelLabel: string[]
  amount: string
  probability: number
  angle: number
  className: string
}

export interface SpinResult {
  prizeId: string
  label: string
  amount: string
  angle: number
}
