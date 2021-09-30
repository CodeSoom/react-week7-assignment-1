export default function ReviewInput({
  label, type = 'text', inputName, onChange,
}) {
  const id = `input-${inputName}`;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <div>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={inputName}
        onChange={handleChange}
      />
    </div>
  );
}
