import { useSelector } from 'react-redux';

import { get } from '../../apps/utils';
import Error from '../shared/Error';
import Loading from '../shared/Loading';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const {
    isLoading, isError, errorMessage, data: restaurants,
  } = useSelector(get('restaurants'));

  if (isLoading) return <Loading />;

  if (isError) return <Error errorMessage={errorMessage} />;

  return (
    <Restaurants restaurants={restaurants} />
  );
}
