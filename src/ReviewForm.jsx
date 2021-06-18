import TextField from './TextField';

export default function ReviewForm({ onSubmit, onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <TextField
        type="number"
        label="평점"
        name="score"
        onChange={handleChange}
      />
      <div>
        <label
          htmlFor="review-description"
        >
          리뷰 내용
        </label>
        <input
          type="text"
          id="review-description"
          name="description"
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
