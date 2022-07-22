import { useDispatch, useSelector } from 'react-redux';

import { changeReviewField } from '@/store/actions';
import { sendReview } from '@/store/async-actions';

import { get } from '@/utils';

import ReviewForm from './ReviewForm';

export default function ReviewFormContainer({ restaurantId }) {
  const dispatch = useDispatch();

  const reviewFields = useSelector(get('reviewFields'));
  const accessToken = useSelector(get('accessToken'));

  const handleChange = ({ name, value }) => {
    dispatch(changeReviewField({ name, value }));
  };

  const handleSubmit = () => {
    dispatch(sendReview({ restaurantId }));
  };

  if (!accessToken) {
    return <></>;
  }

  return (
    <ReviewForm
      reviewFields={reviewFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
