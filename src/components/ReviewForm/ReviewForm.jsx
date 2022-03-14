export default function ReviewForm({
  onChange,
  onSubmit,
  score,
  name: nameValue,
  description,
}) {
  return (
    <div>
      <label htmlFor="score">
        평점
      </label>
      <input
        value={score}
        onChange={({ target: { name, valueAsNumber } }) => onChange(name, valueAsNumber)}
        type="number"
        id="score"
        name="score"
      />
      <label htmlFor="name">
        이름
      </label>
      <input
        value={nameValue}
        onChange={({ target: { name, value } }) => onChange(name, value)}
        type="text"
        id="name"
        name="name"
      />
      <label htmlFor="description">
        후기
      </label>
      <input
        value={description}
        onChange={({ target: { name, value } }) => onChange(name, value)}
        type="text"
        id="description"
        name="description"
      />
      <button type="submit" onClick={() => onSubmit()}>
        작성
      </button>
    </div>
  );
}
