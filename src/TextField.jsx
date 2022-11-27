export default function TextField({
  label, name, value, type = 'text', onChange,
}) {
  const id = `input-${name}`;

  function handleChange(e) {
    const { target } = e;
    onChange({ name, value: target.value });
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
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
