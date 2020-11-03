import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RestaurantsPage from './pages/RestaurantsPage';
import RestaurantPage from './pages/RestaurantPage';
import NotFoundPage from './pages/NotFoundPage';

// 로그인 컨테이너 구현
// 로그인 서비스 구현
/*
 *        [POST] https://eatgo-login-api.ahastudio.com/session
 *        Content-Type : application/json
 *        {"email": "", "password": ""}
 */
// 로그인 액션, 리듀서 구현
// 로그인 페이지 구현
// 레스토랑 리뷰 컨테이너 구현
// 레스토랑 리뷰 서비스 구현
/*
 *        [POST] https://eatgo-customer-api.ahastudio.com/restaurants/${restaurantId}/reviews
 *        Content-Type : application/json
 *        Authorization : Bearer ${key}
 *        {"score": 5, "description": ""}
 */
// 레스토랑 리뷰 액션, 리듀서 구현
// RestaurantPage에 레스토랑 리뷰 컨테이너 포함
// 로그인 시에만 레스토랑 리뷰 기능이 보이도록 처리
// [덤] 최신 리뷰가 가장 위에 표시되도록 정렬하기
// [덤] RestaurantPage에서 로그인이 안되어있다면 리뷰 폼이 disabled 되어있고
//     로그인을 하면 리뷰를 남길 수 있다는 안내문구와 로그인 페이지로 가는 링크 추가

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
