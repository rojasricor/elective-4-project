import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer/Footer'
import { Oswald } from 'next/font/google'
import './Global.css'
import ToasterProvider from '@/providers/ToasterProvider'

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Educacion Finaciera | Home',
  description: 'Educational for Finances',
  keywords: 'Educacion, finanzas, enseñanzas, ahorro,'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className={oswald.className}>
      <body>
        <Navbar />
        <ToasterProvider />

        <div className="py-20">{children}</div>

        <Footer />
      </body>
    </html>
  )
}
