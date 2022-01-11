export default function ReviewItems({ reviewItems }) {
  if (!(reviewItems || []).length) {
    return (
      <p>리뷰가 없어요!</p>
    );
  }

  return (
    <ul>
      {reviewItems.map(({
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
