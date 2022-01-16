export default function Reviews({ reviews = [] }) {
  if (!reviews.length) {
    return null;
  }

  const sortedReviews = [...reviews].sort((a, b) => b.id - a.id);

  return (
    <ul>
      {sortedReviews.map(({
        id, name, description, score,
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
