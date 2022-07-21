export default function ReviewForm({ score, description }) {
  return (
    <form>
      <div>
        <label htmlFor="review-score">
          평점
        </label>
        <input
          id="review-score"
          name="score"
          type="number"
          value={score}
        />
      </div>
      <div>
        <label htmlFor="review-description">
          리뷰 내용
        </label>
        <input
          id="review-description"
          name="description"
          type="text"
          value={description}
        />
      </div>
      <button type="submit">리뷰 남기기</button>
    </form>
  );
}
