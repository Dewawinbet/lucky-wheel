'use client'
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
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
              <CasinoOutlinedIcon sx={{ color: '#fff', fontSize: 22 }} />
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
            <AutoAwesomeIcon sx={{ fontSize: 17, color: '#FBBF24' }} />
            <PoweredLabel>Powered by</PoweredLabel>
            <PoweredBrand>DEVAWINBET</PoweredBrand>
          </PoweredBy>
        </HeaderAction>
      </HeaderInner>
    </HeaderRoot>
  )
}
