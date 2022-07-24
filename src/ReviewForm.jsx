export default function ReviewForm({ title, name, onChange }) {
  const handleChange = (event) => {
    const { target } = event;
    onChange({ name: target.name, value: target.value });
  };

  return (
    <div>
      <label htmlFor={`review-${name}`}>
        {title}
      </label>
      <input onChange={handleChange} type="text" id={`review-${name}`} />
    </div>
  );
}
