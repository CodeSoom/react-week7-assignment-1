export default function ReviewForm({ onSubmit, onChange }) {
  return (
    <>
      <div>
        <label
          htmlFor="review-score"
        >
          평점
        </label>
        <input
          type="number"
          name="score"
          id="review-score"
          onChange={onChange}
        />
      </div>
      <div>
        <label
          htmlFor="review-description"
        >
          리뷰 내용
        </label>
        <input
          type="text"
          name="description"
          id="review-description"
          onChange={onChange}
        />
      </div>
      <button
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </button>
    </>
  );
}
