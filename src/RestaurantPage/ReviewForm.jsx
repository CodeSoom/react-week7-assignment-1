export default function ReviewForm({ onChange, onSubmit }) {
  function handleChange({ target: { name, value } }) {
    onChange({ name, value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="review-score">
          평점
        </label>
        <input
          type="number"
          id="review-score"
          name="score"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="review-description">
          리뷰 내용
        </label>
        <input
          type="text"
          id="review-description"
          name="description"
          onChange={handleChange}
        />
      </div>
      <button type="submit">
        리뷰 남기기
      </button>
    </form>
  );
}
