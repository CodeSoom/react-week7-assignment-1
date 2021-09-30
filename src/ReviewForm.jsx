import ReviewInput from './ReviewInput';

export default function ReviewForm({ onChange, onSubmit }) {
  return (
    <>
      <ReviewInput
        label="평점"
        type="nubmer"
        inputName="score"
        onChange={onChange}
      />
      <ReviewInput
        label="리뷰 내용"
        inputName="description"
        onChange={onChange}
      />
      <button type="button" onClick={onSubmit}>
        리뷰 남기기
      </button>
    </>
  );
}
