export default function TextField({
  label, type, name, value, onChange,
}) {
  const id = `${name}-input`;

  function handleChange(event) {
    onChange({ name, value: event.target.value });
  }

  return (
    <div>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
