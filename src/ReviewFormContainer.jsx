import { useDispatch, useSelector } from 'react-redux';

import { setForm } from './actions';
import ReviewForm from './ReviewForm';

export default function ReviewFormContainer() {
  const dispatch = useDispatch();

  const { score, description } = useSelector((state) => state.form);

  function handleChange({ name, value }) {
    dispatch(setForm({ name, value }));
  }
  function handleSubmit() {
    dispatch(); // Todo
  }

  return (
    <ReviewForm
      form={{ score, description }}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
