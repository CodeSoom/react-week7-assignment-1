import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantContainer from '../containers/RestaurantContainer';

import { getRestaurantById } from '../store/actions';

export default function RestaurantViewPage({ match }) {
  const { params: { id } } = match;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantById(id));
  }, []);

  return (
    <div>
      <h2>Restaurant View</h2>
      <RestaurantContainer />
    </div>
  );
}
