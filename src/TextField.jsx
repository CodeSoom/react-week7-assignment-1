export default function TextField({
  label, type, name, onChange,
}) {
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
        type={type || 'text'}
        name={name}
        id={id}
        placeholder={`${label}을 입력해주세요.`}
        value=""
        onChange={handleChange}
      />
    </div>
  );
}
