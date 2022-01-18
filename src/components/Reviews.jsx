export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  const sortedReviews = [...[...reviews].sort((a, b) => b.id - a.id)].slice(0, 10);

  return (
    <>
      <h2>리뷰</h2>
      <ul>
        {sortedReviews.map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            {name}
            <br />
            {score}
            <br />
            {description}
          </li>
        ))}
      </ul>
    </>
  );
}
