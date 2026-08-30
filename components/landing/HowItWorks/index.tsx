'use client'
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined'
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined'
import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined'
import { Box, Typography } from '@mui/material'
import {
  Section,
  Steps,
  Step,
  StepNumber,
  IconBox,
} from './styles'

const steps = [
  {
    number: '01',
    title: 'Enter your voucher',
    description: 'Use your unique voucher code to unlock your spin.',
    icon: <ConfirmationNumberOutlinedIcon />,
  },
  {
    number: '02',
    title: 'Verify your code',
    description: 'We check your voucher and make sure it has not been used.',
    icon: <VerifiedOutlinedIcon />,
  },
  {
    number: '03',
    title: 'Spin & win',
    description: 'Spin the wheel and find out which prize is yours.',
    icon: <CasinoOutlinedIcon />,
  },
]

export default function HowItWorks() {
  return (
    <Section>
      <Box sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
        <Typography
          variant="overline"
          sx={{
            color: '#A78BFA',
            fontWeight: 800,
            letterSpacing: '0.14em',
          }}
        >
          HOW IT WORKS
        </Typography>

        <Typography
          variant="h3"
          sx={{
            mt: 1,
            fontSize: { xs: 30, sm: 38 },
          }}
        >
          Three simple steps
        </Typography>
      </Box>

      <Steps>
        {steps.map((step) => (
          <Step key={step.number}>
            <IconBox>{step.icon}</IconBox>

            <StepNumber>{step.number}</StepNumber>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                mb: 1,
              }}
            >
              {step.title}
            </Typography>

            <Typography
              sx={{
                color: 'text.secondary',
                lineHeight: 1.65,
                fontSize: 14,
              }}
            >
              {step.description}
            </Typography>
          </Step>
        ))}
      </Steps>
    </Section>
  )
}