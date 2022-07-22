export default function ReviewForm({ reviewFields, onChange, onSubmit }) {
  const { score, description } = reviewFields;

  const handleChange = (event) => {
    const { target: { name, value } } = event;

    onChange({ name, value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="score">평점</label>
        <input
          id="score"
          type="number"
          name="score"
          onChange={handleChange}
          value={score}
        />
      </div>
      <div>
        <label htmlFor="description">리뷰 내용</label>
        <input
          id="description"
          type="text"
          name="description"
          onChange={handleChange}
          value={description}
        />
      </div>
      <div>
        <button type="submit">리뷰 남기기</button>
      </div>
    </form>
  );
}
