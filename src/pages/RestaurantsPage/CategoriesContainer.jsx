import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from '@actions';
import { get } from '@utils';

import Buttons from './Buttons';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <Buttons
      buttons={categories}
      handleClick={handleClick}
      selected={selectedCategory}
    />
  );
}
