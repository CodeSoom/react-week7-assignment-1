// 관심사: 상태그려주기
export default function ReviewForm({ onChangeField, onClickSubmit }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChangeField({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="rating-input">
          평점
        </label>
        <input
          id="rating-input"
          type="number"
          name="rating"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="review-input">
          리뷰 내용
        </label>
        <input
          id="review-input"
          type="text"
          name="review"
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        onClick={onClickSubmit}
      >
        리뷰 남기기
      </button>
    </>
  );
}
