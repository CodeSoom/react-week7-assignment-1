export default function TextField({ onChange, label, name, type = 'text' }) {
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
        type={type}
        id={id}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
}
