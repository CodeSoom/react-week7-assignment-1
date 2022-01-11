import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';
import RestaurantsPage from '../Pages/RestaurantsPage';
import RestaurantPage from '../Pages/RestaurantPage';
import NotFoundPage from '../Pages/NotFoundPage';

export default function App() {
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
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
