import Aside from '@/components/Aside'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finanzas Educativas | Admin'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Aside />
      {children}
    </>
  )
}
