export default function TextField({
  label, type = 'text', name, value, onChange,
}) {
  const id = `input${name}`;

  function handleChange({ target: { value: targetValue } }) {
    onChange({ name, targetValue });
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
