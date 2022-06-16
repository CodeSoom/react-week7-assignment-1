import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  loadRestaurantDetail,
} from './restaurantActions';

import { get } from '../../apps/utils';

import Detail from './Detail';
import Loading from '../shared/Loading';
import Error from '../shared/Error';

export default function DetailContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    isLoading, isError, errorMessage, data: restaurantDetail,
  } = useSelector(get('restaurantDetail'));

  useEffect(() => {
    dispatch(loadRestaurantDetail(id));
  }, [id]);

  if (isLoading) return <Loading />;

  if (isError) return <Error errorMessage={errorMessage} />;

  return (
    <>
      <Detail
        name={restaurantDetail.name}
        address={restaurantDetail.address}
        menuItems={restaurantDetail.menuItems}
      />
    </>
  );
}
