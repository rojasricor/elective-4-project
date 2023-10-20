import NavBar from '@/components/Navbar'
import Footer from '@/components/Footer/Footer'
import { Oswald } from 'next/font/google'
import './Global.css'
import ToasterProvider from '@/providers/ToasterProvider'
import SessionProviderContext from '@/providers/SessionProvider'

const oswald = Oswald({
  subsets: ['latin'],
  preload: false
})

export const metadata = {
  title: 'Educacion Finaciera | Home',
  description: 'Educational for Finances',
  keywords: 'Educacion, finanzas, enseñanzas, ahorro,'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className={oswald.className}>
      <body>
        <SessionProviderContext>
          <NavBar />
          <ToasterProvider />

          <div>{children}</div>

          <Footer />
        </SessionProviderContext>
      </body>
    </html>
  )
}
