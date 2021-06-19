import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantPage from './pages/RestaurantPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  // BrowserRouter의 위치를 index.jsx로 이동하여,
  // 모든 페이지 내에서 라우팅이 가능하도록 지원함.
  return (
    <div>
      <header>
        <Link to="/">헤더 영역: 로고 등</Link>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route path="/restaurants/" component={RestaurantsPage} />
        <Route component={NotFoundPage} />
        {/* switch의 경우 항상 마지막줄 컴포넌트가 기본값으로 보여진다. */}
      </Switch>
      <footer>풋터 영역</footer>
    </div>
  );
}
