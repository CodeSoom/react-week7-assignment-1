import TextField from './TextField';

export default function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  return (
    <>
      <form>
        <TextField
          label="평점"
          name="score"
          type="number"
          value={score}
          onChange={onChange}
        />
        <TextField
          label="리뷰 내용"
          name="description"
          type="text"
          value={description}
          onChange={onChange}
        />
      </form>
      <button type="button" onClick={onSubmit}>
        리뷰 남기기
      </button>
    </>
  );
}
