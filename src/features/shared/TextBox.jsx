export default function TextBox({
  id, labelText, type, value, onChange, name,
}) {
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input type={type} id={id} name={name} value={value} onChange={onChange} />
    </div>
  );
}
