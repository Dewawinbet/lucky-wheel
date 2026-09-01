'use client'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { Typography } from '@mui/material'
import {
  FooterRoot,
  FooterInner,
  FooterBrand,
  FooterPowered,
  FooterPoweredMark,
} from './styles'

export default function Footer() {
  return (
    <FooterRoot>
      <FooterInner>
        <FooterBrand>
          <Typography variant="body2" color="text.secondary">
            LuckyWheel
          </Typography>
          <FooterPowered>
            <FooterPoweredMark>
              <AutoAwesomeIcon sx={{ fontSize: 12, verticalAlign: 'middle' }} />
            </FooterPoweredMark>
            <span>Powered by DEVAWINBET</span>
          </FooterPowered>
        </FooterBrand>

        <Typography variant="body2" color="text.secondary">
          Good luck & have fun.
        </Typography>
      </FooterInner>
    </FooterRoot>
  )
}
