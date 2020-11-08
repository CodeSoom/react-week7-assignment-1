import React from 'react';

import {
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantPage from './pages/RestaurantPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';

// [덤] 최신 리뷰가 가장 위에 표시되도록 정렬하기
// [덤] RestaurantPage에서 로그인이 안되어있다면 리뷰 폼이 disabled 되어있고
//     로그인을 하면 리뷰를 남길 수 있다는 안내문구와 로그인 페이지로 가는 링크 추가

export default function App() {
  const { pathname } = useLocation();

  return (
    <div>
      {
        pathname === '/' ? null : (
          <header>
            <h1>
              <Link to="/">헤더</Link>
            </h1>
          </header>
        )
      }
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
