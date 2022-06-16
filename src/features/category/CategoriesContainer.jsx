import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestaurants,
} from '../restaurant/restaurantActions';

import { selectCategory } from './categoryActions';

import { get } from '../../apps/utils';

import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const {
    isLoading, isError, errorMessage, data: categories,
  } = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  if (isLoading) return <div>로딩중...</div>;

  if (isError) {
    return (
      <div>
        에러:
        {' '}
        {errorMessage}
      </div>
    );
  }

  return (
    <Categories
      categories={categories}
      onClick={handleClick}
      selectedCategory={selectedCategory}
    />
  );
}
