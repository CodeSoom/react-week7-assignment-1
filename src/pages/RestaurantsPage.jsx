import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { loadInitialData } from '../redux/actions';
import RegionsContainer from '../components/RegionsContainer';
import CategoriesContainer from '../components/CategoriesContainer';
import RestaurantsContainer from '../components/RestaurantsContainer';
// 목표
// 0. 지역, 분류 목록을 얻기
// 1. 지역 선택
// 2. 분류 선택
// 3. 식당 목록

export default function RestaurantsPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  function handleClickRestaurant(restaurant) {
    // 페이지 이동
    const url = `/restaurants/${restaurant.id}`;
    history.push(url);
  }

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
    </div>
  );
}
