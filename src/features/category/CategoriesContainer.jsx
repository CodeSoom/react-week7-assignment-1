import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestaurants,
} from '../restaurant/restaurantActions';

import { selectCategory } from './categoryActions';

import { get } from '../../apps/utils';

import Categories from './Categories';
import Loading from '../shared/Loading';
import Error from '../shared/Error';

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

  if (isLoading) return <Loading />;

  if (isError) return <Error errorMessage={errorMessage} />;

  return (
    <Categories
      categories={categories}
      onClick={handleClick}
      selectedCategory={selectedCategory}
    />
  );
}
