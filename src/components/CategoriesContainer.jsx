import { useDispatch, useSelector } from 'react-redux';

import {
  selectCategory,
  loadRestaurants,
} from '../modules/actions';

import { get } from '../utils';
import Categories from './Categories';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get('categories'));
  const selectedCategory = useSelector(get('selectedCategory'));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <Categories
      categories={categories}
      selectedCategory={selectedCategory}
      onClick={handleClick}
    />
  );
}
