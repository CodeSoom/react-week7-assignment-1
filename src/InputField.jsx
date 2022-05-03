export default function LoginForm({
  onChange, label, name, type = 'text',
}) {
  function handleChange(event) {
    const { target: { value } } = event;

    onChange({ name, value });
  }

  return (
    <div>
      <label htmlFor={`input-field-${name}`}>{label}</label>
      <input
        id={`input-field-${name}`}
        type={type}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
}
