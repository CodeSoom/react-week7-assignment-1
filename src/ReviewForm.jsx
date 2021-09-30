import TextField from './TextField';

export default function ReviewForm({ onChange }) {
  return (
    <>
      <TextField
        name="score"
        label="평점"
        onChange={onChange}
      />
      <TextField
        name="description"
        label="리뷰 내용"
        onChange={onChange}
      />
    </>
  );
}
