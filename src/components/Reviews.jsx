export default function Reviews({ reviews = [] }) {
  if (!reviews.length) {
    return null;
  }

  return (
    <ul>
      {reviews.map(({
        id,
        name,
        description,
        score,
      }) => (
        <li key={id}>
          <div>
            {name}
          </div>
          <div>
            {score}
            점
          </div>
          <div>
            {description}
          </div>
        </li>
      ))}
    </ul>
  );
}
