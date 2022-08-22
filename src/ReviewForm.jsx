import TextInput from './TextInput';

export default function ReviewForm({
  score, description, onChange, onClick,
}) {
  return (
    <>
      <TextInput
        id="review-score"
        label="평점"
        type="number"
        name="score"
        value={score}
        onChange={onChange}
      />
      <TextInput
        id="review-description"
        label="리뷰 내용"
        type="text"
        name="description"
        value={description}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>리뷰 남기기</button>
    </>
  );
}
