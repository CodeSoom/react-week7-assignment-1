import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';

export default function RoutePage() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route exact path="/restaurants" component={RestaurantsPage} />
      <Route path="/restaurants/:id" component={RestaurantPage} />
      <Route path="/login" component={LoginPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
