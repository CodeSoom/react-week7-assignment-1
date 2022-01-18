import { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import RegionsContainer from '../components/RegionsContainer';
import CategoriesContainer from '../components/CategoriesContainer';
import RestaurantsContainer from '../components/RestaurantsContainer';

import {
  loadInitialData,
} from '../modules/actions';

export default function RestaurantsPage() {
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  function handleClickRestaurant(restaurant) {
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
