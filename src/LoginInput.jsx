export default function LoginInput({
  title, name, value, onChange,
}) {
  return (
    <div>
      <label htmlFor={`login-${name}`}>{title}</label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        type={name}
        id={`login-${name}`}
      />
    </div>
  );
}
