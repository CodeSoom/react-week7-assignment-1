import ReviewInput from './ReviewInput';

export default function ReviewForm({ fields, onChange, onSubmit }) {
  const { score, description } = fields;

  return (
    <>
      <ReviewInput
        label="평점"
        type="nubmer"
        inputValue={score}
        inputName="score"
        onChange={onChange}
      />
      <ReviewInput
        label="리뷰 내용"
        inputValue={description}
        inputName="description"
        onChange={onChange}
      />
      <button type="button" onClick={onSubmit}>
        리뷰 남기기
      </button>
    </>
  );
}
