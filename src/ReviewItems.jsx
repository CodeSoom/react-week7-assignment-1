export default function ReviewItems({ reviewItems }) {
  if (!(reviewItems || []).length) {
    return (
      <p>리뷰가 없어요!</p>
    );
  }

  return (
    <ul>
      {reviewItems.map(({
        id, name, description, score,
      }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{score}</p>
          <p>{description}</p>
        </li>
      ))}
    </ul>
  );
}
