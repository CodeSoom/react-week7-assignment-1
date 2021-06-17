import { useDispatch, useSelector } from 'react-redux';

import { setForm, sendReview } from './actions';
import ReviewForm from './ReviewForm';

export default function ReviewFormContainer() {
  const dispatch = useDispatch();

  const form = useSelector((state) => state.form);

  function handleChange({ name, value }) {
    dispatch(setForm({ name, value }));
  }
  function handleSubmit() {
    dispatch(sendReview());
  }

  return (
    <ReviewForm
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
