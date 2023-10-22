import pkg from '@/../package.json'
import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/Navbar'
import SessionProviderContext from '@/providers/SessionProvider'
import ToasterProvider from '@/providers/ToasterProvider'
import { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import './Global.css'

const oswald = Oswald({
  subsets: ['latin'],
  preload: false
})

<<<<<<< HEAD
export const metadata = {
  title: 'Finanzas Educativas | Home',
  description: 'Educational for Finances',
  keywords: 'Educacion, finanzas, enseñanzas, ahorro,'
=======
export const metadata: Metadata = {
  title: 'Finanzas Educativas | Bienvenidos',
  generator: 'Next JS',
  creator: 'ITFIP Development Team',
  publisher: 'ITFIP Development Team',
  description: pkg.description,
  keywords: pkg.keywords,
  authors: pkg.contributors
>>>>>>> 07069aa1c8165d19f0d59dba3707981f06527eab
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={oswald.className}>
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
