import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './components/AppRoutes'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar'

function App(): React.ReactNode {
  const handleClick = async (): Promise<void> => {
    const response = await fetch('/api')
    const data = await response.text()
    window.alert(data)
  }

  return (
    <BrowserRouter>
      <NavBar />

      <div className="text-center m-5">
        <button
          onClick={handleClick}
          className="bg-slate-500 hover:bg-slate-600 active:bg-slate-700 text-white py-2 px-3 rounded-md"
        >
          Probar api
        </button>
      </div>

      <AppRoutes />

      <Footer />
    </BrowserRouter>
  )
}

export default App
