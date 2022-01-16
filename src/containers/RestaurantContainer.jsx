import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import RestaurantDetail from '../components/RestaurantDetail';
import ReviewForm from '../components/ReviewForm';
import {
  loadRestaurant, sendReview,
} from '../actions';
import { get } from '../utils';

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();
  const restaurant = useSelector(get('restaurant'));
  const accessToken = useSelector(get('accessToken'));

  const [reviewForm, setReviewForm] = useState({
    score: 0,
    description: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setReviewForm({
      ...reviewForm,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const { score, description } = reviewForm;

    dispatch(sendReview({ restaurantId, score, description }));
  };

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      {accessToken ? (
        <ReviewForm onChange={handleChange} onSubmit={handleSubmit} />
      ) : null}
    </>
  );
}
