import { useDispatch, useSelector } from 'react-redux';

import {
  changeReviewField,
  sendReview,
} from './actions';

import { get } from './utils';

// 별도 파일로 분리 예정
function ReviewForm({
  score, description, onChange, onClick,
}) {
  return (
    <>
      <div>
        <label htmlFor="review-score">평점</label>
        <input
          type="number"
          id="review-score"
          name="score"
          value={score}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="review-description">리뷰 내용</label>
        <input
          type="text"
          id="review-description"
          name="description"
          value={description}
          onChange={onChange}
        />
      </div>
      <button type="button" onClick={onClick}>리뷰 남기기</button>
    </>
  );
}

export default function ReviewFormContainer({ restaurantId }) {
  const dispatch = useDispatch();

  const { score, description } = useSelector(get('reviewFields'));
  const accessToken = useSelector(get('accessToken'));

  function handleChange(event) {
    const { target: { name, value } } = event;
    dispatch(changeReviewField({ name, value }));
  }

  function handleSubmit() {
    dispatch(sendReview({ restaurantId }));
  }

  if (!accessToken) {
    return null;
  }

  return (
    <ReviewForm
      restaurantId={restaurantId}
      score={score}
      description={description}
      onChange={handleChange}
      onClick={handleSubmit}
    />
  );
}
