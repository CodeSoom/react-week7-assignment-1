import TextField from './TextField';

export default function ReviewForm({ reviewFields, onChange, onSubmit }) {
  return (
    <>
      <TextField
        label="평점"
        name="score"
        type="number"
        inputValue={reviewFields.score}
        onChange={onChange}
      />
      <TextField
        label="리뷰 내용"
        name="description"
        inputValue={reviewFields.description}
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
