import TextField from './TextField';

export default function ReviewForm({ fields, onSubmit, onChange }) {
  const { score, description } = fields;

  return (
    <>
      <h3>리뷰 등록</h3>
      <TextField
        label="평점"
        type="number"
        name="score"
        value={score}
        onChange={onChange}
      />
      <TextField
        label="리뷰 내용"
        type="text"
        name="description"
        value={description}
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
