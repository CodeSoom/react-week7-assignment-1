import React from 'react';

import { useDispatch } from 'react-redux';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import {
  setAccessToken,
} from './actions';

import HomePage from './HomePage';
import AboutPage from './About/AboutPage';
import LoginPage from './LoginPage';
import LogoutPage from './LogoutPage';

import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    dispatch(setAccessToken(accessToken));
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
        <Route path="/login" component={LoginPage} />
        <Route path="/logout" component={LogoutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
