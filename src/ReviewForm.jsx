export default function ReviewForm({ reviewFields, onSubmit, onChange }) {
  const { score, description } = reviewFields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

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
          value={score}
          onChange={handleChange}
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
          value={description}
          onChange={handleChange}
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
