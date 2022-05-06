import InputField from './InputField';

export default function ReviewForm({ onChange, onSubmit, fields = {} }) {
  const { score, description } = fields;
  return (
    <div>
      <InputField
        onChange={onChange}
        label="평점"
        name="score"
        type="number"
        value={score}
      />
      <InputField
        onChange={onChange}
        label="리뷰 내용"
        name="description"
        value={description}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        리뷰 남기기
      </button>
    </div>
  );
}
