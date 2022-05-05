export default function Reviews({ reviews }) {
  if (!(reviews || []).length) {
    return (
      <p>리뷰가 없습니다! 첫번째 리뷰를 남겨주세요.</p>
    );
  }

  return (
    <ul>
      {reviews.map(({
        id, name, score, description,
      }) => (
        <li key={id}>
          {`${name}
        ${score}
        ${description}`}
        </li>
      ))}
    </ul>
  );
}
