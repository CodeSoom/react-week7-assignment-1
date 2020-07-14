import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from '../store/actions';

import ButtonList from '../components/ButtonList';

import { get } from '../utils';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClickCategory(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <ButtonList
      items={categories}
      selectedItem={selectedCategory}
      onClick={handleClickCategory}
    />
  );
}
