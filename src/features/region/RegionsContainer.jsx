import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestaurants,
} from '../restaurant/restaurantActions';

import { selectRegion } from './regionActions';

import { get } from '../../apps/utils';

import Regions from './Regions';
import Loading from '../shared/Loading';
import Error from '../shared/Error';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const {
    isLoading, isError, errorMessage, data: regions,
  } = useSelector(get('regions'));

  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  if (isLoading) return <Loading />;

  if (isError) return <Error errorMessage={errorMessage} />;

  return (
    <Regions
      regions={regions}
      onClick={handleClick}
      selectedRegion={selectedRegion}
    />
  );
}
