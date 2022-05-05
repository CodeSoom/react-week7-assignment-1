export default function ReviewForm({ onChange }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="review-score">평점</label>
        <input
          type="number"
          name="score"
          id="review-score"
          placeholder="리뷰 평점을 입력해주세요."
          value=""
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="review-description">리뷰 내용</label>
        <input
          type="text"
          name="description"
          id="review-description"
          placeholder="리뷰 내용을 입력해주세요."
          value=""
          onChange={handleChange}
        />
      </div>
    </>
  );
}
