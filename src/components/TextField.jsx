export default function TextField({
  id,
  label,
  type = 'text',
  name,
  value,
  onChange,
}) {
  function handleChange({ target }) {
    onChange({ name, value: target.value });
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
