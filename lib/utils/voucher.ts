import { createHash, randomBytes } from 'crypto'

export const VOUCHER_CODE_REGEX = /^[A-Z]{2}\d{2}[A-Z0-9]{4}$/
export const SPIN_SESSION_COOKIE = 'lucky_spin_session'
export const SPIN_SESSION_TTL_MINUTES = 10

export function normalizeVoucherCode(code: string) {
  return code.trim().toUpperCase()
}

export function isValidVoucherCodeFormat(code: string) {
  return VOUCHER_CODE_REGEX.test(code)
}

export function createSpinSessionToken() {
  return randomBytes(32).toString('base64url')
}

export function hashSpinSessionToken(token: string) {
  return createHash('sha256').update(token).digest('hex')
}

export function getSpinSessionExpiry() {
  return new Date(Date.now() + SPIN_SESSION_TTL_MINUTES * 60 * 1000)
}
