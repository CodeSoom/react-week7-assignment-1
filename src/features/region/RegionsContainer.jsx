import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestaurants,
} from '../../apps/store/actions';

import { selectRegion } from './regionActions';

import { get } from '../../apps/utils';

import Regions from './Regions';

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
    <Regions
      regions={regions}
      onClick={handleClick}
      selectedRegion={selectedRegion}
    />
  );
}
