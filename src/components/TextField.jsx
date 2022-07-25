export default function TextField({
  label,
  type = 'text',
  name,
  onChange,
  targetValue,
}) {
  const id = `input-${name}`;

  function handleChange(e) {
    const { target: { value } } = e;

    onChange({ name, value });
  }

  return (
    <>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        onChange={handleChange}
        value={targetValue}
      />
    </>
  );
}
