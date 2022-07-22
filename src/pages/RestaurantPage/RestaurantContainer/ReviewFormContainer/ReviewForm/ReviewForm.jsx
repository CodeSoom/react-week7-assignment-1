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
          type="number"
          id="score"
          name="score"
          value={score}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">리뷰 내용</label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">리뷰 남기기</button>
      </div>
    </form>
  );
}
