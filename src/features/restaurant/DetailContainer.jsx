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

import ReviewFormContainer from '../review/ReviewFormContainer';
import ReviewsContainer from '../review/ReviewsContainer';

import { loadToken } from '../auth/authStorage';

import { setAccessToken } from '../auth/authActions';

export default function DetailContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    isLoading, isError, errorMessage, data: restaurantDetail,
  } = useSelector(get('restaurantDetail'));

  const { isLogin } = useSelector(get('auth'));

  useEffect(() => {
    dispatch(loadRestaurantDetail(id));
  }, [id]);

  useEffect(() => {
    const accessToken = loadToken();
    if (accessToken) {
      dispatch(setAccessToken(accessToken));
    }
  }, []);

  if (isLoading) return <Loading />;

  if (isError) return <Error errorMessage={errorMessage} />;

  return (
    <>
      <Detail
        name={restaurantDetail.name}
        address={restaurantDetail.address}
        menuItems={restaurantDetail.menuItems}
      />
      {isLogin && <ReviewFormContainer restaurantId={id} />}
      <ReviewsContainer />
    </>
  );
}
