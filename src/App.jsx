import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <div>
      <header>
        <h1>
          <Link to="/">헤더</Link>
        </h1>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/restaurants" element={<RestaurantsPage />} />
        <Route path="/restaurants/:id" element={<RestaurantPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
