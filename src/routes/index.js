import {Route, Routes} from 'react-router-dom';
import Cars from 'pages/cars';
import Users from 'pages/users';
import Home from 'pages/home';

const AppRoutes = () => (
  <Routes>
    <Route path="cars" element={<Cars />} />
    <Route path="users" element={<Users />} />
    <Route index element={<Home />} />
  </Routes>
);

export default AppRoutes;
