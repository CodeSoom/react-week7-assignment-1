import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import HomePage from 'presentational/HomePage';
import AboutPage from 'presentational/AboutPage';
import RestaurantsPage from 'presentational/RestaurantsPage';
import RestaurantPage from 'presentational/RestaurantPage';
import NotFoundPage from 'presentational/NotFoundPage';
import LoginPage from 'presentational/LoginPage';
import { useDispatch } from 'react-redux';
import { setAccessToken } from './redux/actions';

export default function App() {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');
  dispatch(setAccessToken({ accessToken }));

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
