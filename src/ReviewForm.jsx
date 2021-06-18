import TextField from './TextField';

export default function ReviewForm({ onSubmit, onChange }) {
  return (
    <>
      <TextField
        type="number"
        label="평점"
        name="score"
        onChange={onChange}
      />
      <TextField
        label="리뷰 내용"
        name="description"
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </button>
    </>
  );
}
