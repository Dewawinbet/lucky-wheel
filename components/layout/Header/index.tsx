'use client'
import Image from 'next/image'
import { Typography } from '@mui/material'
import {
  HeaderRoot,
  HeaderInner,
  Brand,
  BrandLink,
  BrandMark,
  HeaderAction,
  PoweredBy,
  PoweredLabel,
  PoweredLogo,
} from './styles'

export default function Header() {
  return (
    <HeaderRoot>
      <HeaderInner>
        <Brand>
          <BrandLink href="/" aria-label="Go to LuckyWheel home page">
            <BrandMark>
              <Image
                src="/header-icon.png"
                alt="LuckyWheel"
                width={30}
                height={30}
                sizes="34px"
                priority
              />
            </BrandMark>
            <Typography
              component="span"
              sx={{
                fontWeight: 800,
                fontSize: { xs: 18, sm: 20 },
                color: '#fff',
              }}
            >
              Lucky<span style={{ color: '#A78BFA' }}>Wheel</span>
            </Typography>
          </BrandLink>
        </Brand>

        <HeaderAction>
          <PoweredBy>
            <PoweredLabel>Powered by</PoweredLabel>
            <PoweredLogo>
              <Image src="/newLogoDeva.png" alt="DEVAWINBET" fill sizes="120px" priority />
            </PoweredLogo>
          </PoweredBy>
        </HeaderAction>
      </HeaderInner>
    </HeaderRoot>
  )
}
