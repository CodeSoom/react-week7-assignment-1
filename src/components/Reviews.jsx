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
          <pre>
            {name}
            {`${score}점`}
            {description}
          </pre>
        </li>
      ))}
    </ul>
  );
}
