export default function LoginInput({
  label, type, inputValue, onChange,
}) {
  const id = `input-${type}`;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={type}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}
