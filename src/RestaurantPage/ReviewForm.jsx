import TextField from '../components/TextField';

export default function ReviewForm({
  fields: { score, description },
  onChange, onSubmit,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="평점"
        name="score"
        value={score}
        type="number"
        onChange={onChange}
      />
      <TextField
        label="리뷰 내용"
        name="description"
        value={description}
        onChange={onChange}
      />
      <button type="submit">
        리뷰 남기기
      </button>
    </form>
  );
}
