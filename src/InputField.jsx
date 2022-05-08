export default function LoginForm({
  onChange, label, name, type = 'text', value,
}) {
  function handleChange(event) {
    const { target } = event;

    onChange({ name: target.name, value: target.value });
  }

  return (
    <div>
      <label htmlFor={`input-field-${name}`}>{label}</label>
      <input
        id={`input-field-${name}`}
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}
