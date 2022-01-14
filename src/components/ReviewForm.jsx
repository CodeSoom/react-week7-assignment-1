import TextField from './TextField';

export default function ReviewForm({
  onChange,
  onSubmit,
}) {
  return (
    <>
      <TextField
        id="review-score"
        label="Score"
        type="number"
        name="score"
        onChange={onChange}
      />
      <TextField
        id="review-description"
        label="Description"
        name="description"
        onChange={onChange}
      />
      <button type="button" onClick={onSubmit}>리뷰 남기기</button>
    </>
  );
}
