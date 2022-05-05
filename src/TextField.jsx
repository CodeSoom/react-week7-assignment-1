export default function TextField({ label, name, onChange }) {
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
        type="number"
        name={name}
        id={id}
        placeholder="리뷰 평점을 입력해주세요."
        value=""
        onChange={handleChange}
      />
    </div>
  );
}
