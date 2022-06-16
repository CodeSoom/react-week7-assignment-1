import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  loadRestaurantDetail,
} from './restaurantActions';

import { get } from '../../apps/utils';

import Detail from './Detail';

export default function DetailContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    isLoading, isError, errorMessage, data: restaurantDetail,
  } = useSelector(get('restaurantDetail'));

  useEffect(() => {
    dispatch(loadRestaurantDetail(id));
  }, [id]);

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
    <>
      <Detail
        name={restaurantDetail.name}
        address={restaurantDetail.address}
        menuItems={restaurantDetail.menuItems}
      />
    </>
  );
}
