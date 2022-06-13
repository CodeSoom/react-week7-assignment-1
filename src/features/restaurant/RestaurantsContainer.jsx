import { useSelector } from 'react-redux';

import { get } from '../../apps/utils';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const {
    isLoading, isError, errorMessage, data: restaurants,
  } = useSelector(get('restaurants'));

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
    <Restaurants restaurants={restaurants} />
  );
}
