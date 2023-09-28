import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer/Footer'
import './Global.css'

export const metadata = {
  title: 'Educacion Finaciera | Home',
  description: 'Educational for Finances',
  keywords: 'Educacion, finanzas, enseñanzas, ahorro,',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  )
}
