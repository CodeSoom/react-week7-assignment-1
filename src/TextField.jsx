export default function TextField({
  label, name, type = 'text', onChange, value,
}) {
  const id = `input-${name}`;

  function handleChange(event) {
    const { target: { value: targetValue } } = event;
    onChange({ name, value: targetValue });
  }

  return (
    <div>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
