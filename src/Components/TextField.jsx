export default function TextField({ onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }
  return (
    <div>
      <label htmlFor="review-store">
        평점
      </label>
      <input
        type="number"
        id="review-store"
        name="score"
        onChange={handleChange}
      />
    </div>
  );
}
