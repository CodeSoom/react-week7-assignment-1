export default function TextField({
  label, name, type = 'text', onChange,
}) {
  const id = `input-${name}`;

  function handleChange(e) {
    const { target: { value } } = e;
    onChange({ name, value });
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={handleChange}
      />
    </div>

  );
}
