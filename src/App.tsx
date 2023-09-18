import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './components/AppRoutes'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar'

function App(): React.ReactNode {
  return (
    <BrowserRouter>
      <NavBar />

      <AppRoutes />

      <Footer />
    </BrowserRouter>
  )
}

export default App
