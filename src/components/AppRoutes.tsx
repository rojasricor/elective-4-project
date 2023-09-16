import { Route, Routes } from 'react-router-dom';
import { About } from '../pages';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import PageNotFound from '../pages/PageNotFound';
import Signup from '../pages/Signup';

function AppRoutes(): React.ReactNode {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="/signin" element={<Signin />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contacts />} />

      <Route path="/home" element={<Home />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
