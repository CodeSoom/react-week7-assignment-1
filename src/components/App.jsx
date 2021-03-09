import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import {
  HomePage,
  AboutPage,
  RestaurantsPage,
  RestaurantPage,
  NotFoundPage,
} from '../pages';

/*
전략: Draft v.0.1
1. 로그인 페이지 구현
2. 로그아웃 구현
3. 리뷰 목록 구현
4. 리뷰 평점/내용 등록 구현
*/

function logInPage() {
  return (
    <div>
      <h1>Log In</h1>
      <form>
        <label htmlFor="user-email">
          E-Mail
        </label>
        <input
          type="email"
          id="user-email"
        />
        <label htmlFor="user-password">
          Password
        </label>
        <input
          type="email"
          id="user-password"
        />
      </form>
    </div>
  );
}

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
        <Route path="/login" component={logInPage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
