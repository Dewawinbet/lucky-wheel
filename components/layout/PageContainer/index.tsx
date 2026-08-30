'use client'
import { ReactNode } from 'react'
import { PageRoot, PageContent } from './styles'

interface PageContainerProps {
  children: ReactNode
}

export default function PageContainer({ children }: Readonly<PageContainerProps>) {
  return (
    <PageRoot>
      <PageContent>{children}</PageContent>
    </PageRoot>
  )
}