export default function TextField({
  label, name, value, handleChange: onChange,
}) {
  return (
    <div>
      <label htmlFor={`input-${name}`}>{label}</label>
      <input type="text" id={`input-${name}`} name={name} value={value} onChange={onChange} />
    </div>
  );
}
