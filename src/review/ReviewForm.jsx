export default function ReviewForm({ reviewField, onChange, onClick }) {
  const { score, description } = reviewField;

  function handleReviewChange(event) {
    const {
      target: { name, value },
    } = event;
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor='review-score'>평점</label>
        <input
          type='number'
          name='score'
          value={score}
          onChange={handleReviewChange}
        />
      </div>
      <div>
        <label htmlFor='review-description'>리뷰내용</label>
        <input
          type='text'
          name='description'
          value={description}
          onChange={handleReviewChange}
        />
      </div>

      <button type='button' onClick={onClick}>
        리뷰 남기기
      </button>
    </>
  );
}
