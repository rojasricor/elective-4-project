import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App(): React.ReactNode {
  return (
    <BrowserRouter>
      <Navbar />

      <AppRoutes />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
