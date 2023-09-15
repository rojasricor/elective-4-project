import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

function AppRoutes(): React.ReactNode {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
