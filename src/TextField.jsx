export default function TextField({
  label, name, value, onChange, type = 'text',
}) {
  return (
    <div>
      <label htmlFor={`input-${name}`}>{label}</label>
      <input type={type} id={`input-${name}`} name={name} value={value} onChange={onChange} />
    </div>
  );
}
