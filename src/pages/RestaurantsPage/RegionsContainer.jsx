import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { get } from '@utils';

import {
  selectRegion,
  loadRestaurants,
} from '@actions';

import Buttons from './Buttons';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <Buttons
      buttons={regions}
      handleClick={handleClick}
      selected={selectedRegion}
    />
  );
}
