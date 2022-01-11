export default function ReviewItems({ reviews }) {
  if (!(reviews || []).length) {
    return (
      <p>리뷰가 없어요!</p>
    );
  }

  return (
    <ul>
      {reviews.map(({
        id, name, score, description,
      }) => (
        <li key={id}>
          <div>{name}</div>
          <div>{`${score}점`}</div>
          <div>{description}</div>
        </li>
      ))}
    </ul>
  );
}
