import TextField from './TextField';

export default function ReviewForm({
  onChange,
  onSubmit,
  score,
  description,
}) {
  return (
    <div>
      <TextField
        label="평점"
        name="score"
        type="number"
        onChange={onChange}
        targetValue={score}
      />
      <TextField
        label="리뷰 내용"
        name="description"
        onChange={onChange}
        targetValue={description}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </button>
    </div>
  );
}
