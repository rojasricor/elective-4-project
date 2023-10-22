import Aside from '@/components/Aside'

export const metadata = {
  title: 'Finanzas Educativas | Admin',
  description: 'Educational for Finances',
  keywords: 'Educacion, finanzas, enseñanzas, ahorro,'
}

export default async function RootLayout ({
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
