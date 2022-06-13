import { Switch, Route, Link } from 'react-router-dom';

import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import LoginPage from './pages/Login/LoginPage';
import RestaurantsPage from './pages/Restaurants/RestaurantsPage';
import RestaurantPage from './pages/Restaurant/RestaurantPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

export default function App() {
  return (
    <div>
      <header>
        <h1>
          <Link to='/'>헤더</Link>
        </h1>
      </header>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/login' component={LoginPage} />
        <Route exact path='/restaurants' component={RestaurantsPage} />
        <Route path='/restaurants/:id' component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
