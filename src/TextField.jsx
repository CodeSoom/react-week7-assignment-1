export default function TextField({
  label, type = 'text', name, onChange, inputValue,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target: { value } } = event;
    onChange({ name, value });
  }

  return (
    <div>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}
