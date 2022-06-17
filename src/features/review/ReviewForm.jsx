import Button from '../shared/Button';
import TextBox from '../shared/TextBox';

export default function ReviewForm({
  score, description, onChange, onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <TextBox
        id="score"
        labelText="평점"
        type="number"
        value={score}
        name="score"
        onChange={onChange}
      />
      <TextBox
        id="description"
        labelText="리뷰 내용"
        type="text"
        value={description}
        name="description"
        onChange={onChange}
      />
      <Button onClick={onSubmit}>리뷰 남기기</Button>
    </form>
  );
}
