import { useSelector, useDispatch } from 'react-redux';

import { get } from '../../apps/utils';

import { postReview, setReviewFields } from './reviewActions';

import ReviewForm from './ReviewForm';

export default function ReviewFormContainer({ restaurantId }) {
  const dispatch = useDispatch();
  const { score, description } = useSelector(get('reviewFields'));

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setReviewFields(name, value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postReview(restaurantId));
  };

  return (
    <ReviewForm
      score={score}
      description={description}
      onSubmit={handleSubmit}
      onChange={handleChange}
    />
  );
}
