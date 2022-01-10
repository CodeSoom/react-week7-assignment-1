export default function TextField({
  label, type = 'text', name, onChange,
}) {
  function handleChange(event) {
    const { target: { value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <label htmlFor="login-email">
        {label}
      </label>
      <input
        type={type}
        id="login-email"
        name="email"
        onChange={handleChange}
      />
    </>
  );
}
