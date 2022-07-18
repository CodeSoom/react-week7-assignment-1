export default function TextField({
  label, type = 'text', name, onChange,
}) {
  const id = `input-${name}`;

  function handleChange(e) {
    const { target: { value } } = e;

    onChange({ name, value });
  }

  return (
    <div>
      <div>
        <label htmlFor={id}>
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={id}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
