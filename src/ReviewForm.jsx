import TextFields from './TextFields';

export default function ReviewForm({ handleChange, handleSubmit, form }) {
  const fields = ['score', 'description'];

  return (
    <>
      <TextFields
        fields={fields}
        form={form}
        handleChange={handleChange}
      />

      <button
        type="button"
        onClick={handleSubmit}
      >
        리뷰 남기기
      </button>
    </>
  );
}
