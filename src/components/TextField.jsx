export default function TextField({
  id,
  label,
  type = 'text',
  name,
  onChange,
}) {
  return (
    <>
      <div>
        <label htmlFor={id}>
          {label}
        </label>
        <input
          type={type}
          id={id}
          name={name}
          onChange={onChange}
        />
      </div>
    </>
  );
}
