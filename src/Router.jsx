import { useRoutes } from 'react-router-dom';

import Restaurants from './pages/Restaurants/Restaurants';
import RestaurantDetail from './pages/Restaurants/Detail';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

export default function Router() {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/restaurants',
      element: <Restaurants />,
    },
    {
      path: '/restaurants/:id',
      element: <RestaurantDetail />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return element;
}
