export default function ReviewForm({ onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="input-score">평점</label>
        <input
          type="number"
          id="input-score"
          name="score"
          onChange={handleChange}
        />
        <label htmlFor="input-description">리뷰 내용</label>
        <input
          type="text"
          id="input-description"
          name="description"
          onChange={handleChange}
        />
      </div>
    </>
  );
}
