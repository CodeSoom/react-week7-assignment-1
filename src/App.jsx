import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { loadLoginStatus } from './actions';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import LoginPage from './LoginPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLoginStatus());
  }, []);

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
