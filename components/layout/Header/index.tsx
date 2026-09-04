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
  PoweredBrand,
  PoweredBy,
  PoweredLabel,
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
            <span
              style={{
                position: 'relative',
                width: 18,
                height: 18,
                display: 'inline-block',
                flexShrink: 0,
              }}
            >
              <Image src="/80x80.png" alt="DEVAWINBET" fill sizes="18px" priority />
            </span>
            <PoweredLabel>Powered by</PoweredLabel>
            <PoweredBrand>DEVAWINBET</PoweredBrand>
          </PoweredBy>
        </HeaderAction>
      </HeaderInner>
    </HeaderRoot>
  )
}
