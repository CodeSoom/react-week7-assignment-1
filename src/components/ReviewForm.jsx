export default function ReviewForm({ onChange, onSubmit }) {
  return (
    <div>
      <div>
        <label htmlFor="score">평점</label>
        <input
          id="score"
          name="score"
          type="number"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="description">리뷰</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={onChange}
        />
      </div>
      <button
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </button>
    </div>
  );
}
