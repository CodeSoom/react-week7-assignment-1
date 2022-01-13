// 관심사: 상태그려주기
export default function ReviewForm() {
  return (
    <>
      <div>
        <label htmlFor="rating-input">
          평점
        </label>
        <input
          id="rating-input"
          type="number"
          name="rating"
        />
      </div>
      <div>
        <label htmlFor="review-input">
          리뷰 내용
        </label>
        <input
          id="review-input"
          type="text"
          name="review"
        />
      </div>
      <button
        type="button"
      >
        리뷰 남기기
      </button>
    </>
  );
}
