export default function TextInput({
  id,
  type,
  label,
  name,
  value,
  onChange,
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={(event) => onChange({ name, value: event.target.value })}
      />
    </div>
  );
}
