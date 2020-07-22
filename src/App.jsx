import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setAccessToken } from './store/actions';

import { getItemFromStorage } from './services/storage';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RestaurantListPage from './pages/RestaurantListPage';
import RestaurantViewPage from './pages/RestaurantViewPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  const dispatch = useDispatch();

  const accessToken = getItemFromStorage('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
  }

  return (
    <div>
      <header>
        <h1><Link to="/">헤더</Link></h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantListPage} />
        <Route path="/restaurants/:id" component={RestaurantViewPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
