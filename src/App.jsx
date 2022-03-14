import { Link, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';
import { getStorage } from './services/storage';
import { setAuthorizedToken } from './actions';

export default function App() {
  const dispatch = useDispatch();
  const authorizedToken = getStorage('AuthorizedToken');

  if (authorizedToken) {
    dispatch(setAuthorizedToken(authorizedToken));
  }

  return (
    <div>
      <header>
        <h1>
          <Link to="/">헤더</Link>
        </h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
