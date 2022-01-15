// 관심사: 상태그려주기
export default function ReviewForm({ onChangeField, onClickSubmit }) {
  function handleChange(event) {
    const { target: { name, value } } = event;
    onChangeField({ name, value });
  }

  return (
    <>
      <div>
        <label htmlFor="score-input">
          평점
        </label>
        <input
          id="score-input"
          type="number"
          name="score"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description-input">
          리뷰 내용
        </label>
        <input
          id="description-input"
          type="text"
          name="description"
          onChange={handleChange}
        />
      </div>
      <button
        type="button"
        onClick={onClickSubmit}
      >
        리뷰 남기기
      </button>
    </>
  );
}
