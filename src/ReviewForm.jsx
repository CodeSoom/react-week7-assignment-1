import ReviewInput from './ReviewInput';

export default function ReviewForm({ onChange }) {
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
    </>
  );
}
