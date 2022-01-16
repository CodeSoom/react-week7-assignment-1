export default function Reviews({ reviews }) {
  return (
    <ul>
      {reviews.map(({
        id, name, description, score,
      }) => (
        <li key={id}>
          {score}
          {`${name}: ${description}`}
        </li>
      ))}
    </ul>
  );
}
