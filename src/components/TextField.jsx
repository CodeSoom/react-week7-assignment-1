export default function TextField({
  id,
  label,
  type = 'text',
  name,
  onChange,
}) {
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
        type={type}
        id={id}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
}
