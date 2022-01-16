import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';
import { setAccessToken } from './actions';
import { loadItem } from './services/storage';

export default function App() {
  const dispatch = useDispatch();
  const accessToken = loadItem('accessToken');

  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }
  return (
    <>
      <header>
        <h1>
          <Link to="/">헤더</Link>
        </h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route path="/restaurants/" component={RestaurantsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
