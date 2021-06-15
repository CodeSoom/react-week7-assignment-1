import TextField from './TextField';

export default function ReviewForm({ handleChange, handleSubmit, form }) {
  const fields = ['score', 'description'];

  return (
    <>
      <TextField
        fields={fields}
        form={form}
        handleChange={handleChange}
      />

      <button
        type="button"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </>
  );
}
