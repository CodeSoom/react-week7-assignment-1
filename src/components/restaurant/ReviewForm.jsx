export default function ReviewForm({
  reviewFields, onChange, onSubmit,
}) {
  function handleChange(event) {
    const { target: { name, value } } = event;

    onChange({ name, value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
  }

  const { score, description } = reviewFields;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="review-score">
          평점
        </label>
        <input
          id="review-score"
          name="score"
          type="number"
          value={score}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="review-description">
          리뷰 내용
        </label>
        <input
          id="review-description"
          name="description"
          type="text"
          value={description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">리뷰 남기기</button>
    </form>
  );
}
