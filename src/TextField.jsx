export default function TextField({
  name, label, onChange,
}) {
  const id = `input-${name}`;

  const handleChange = (event) => {
    const { target: { value } } = event;
    onChange({ name, value });
  };

  return (
    <div>
      <label htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
}
