export default function TextField({
  label,
  type,
  id,
  name,
  value,
  onChange,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
}
