import TextField from './TextField';

export default function ReviewForm({ onChange, onSubmit }) {
  return (
    <>
      <div>
        <TextField
          label="평점"
          type="number"
          name="score"
          id="review-score"
          onChange={onChange}
        />
      </div>
      <div>
        <TextField
          label="리뷰 내용"
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
