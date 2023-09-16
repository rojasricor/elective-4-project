import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import Signin from '../pages/Signin';

function AppRoutes(): React.ReactNode {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signin" element={<Signin />} />

      <Route path="/about" element={<About />} />

      <Route path="/contacts" element={<Contacts />} />

      <Route path="/home" element={<Home />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
