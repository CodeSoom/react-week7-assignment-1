export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return (
      <p>등록된 리뷰가 없어요!</p>
    );
  }

  const sortedReviews = [...reviews].sort((a, b) => (b.id - a.id));

  return (
    <div>
      <h3>리뷰</h3>
      <ul>
        {sortedReviews.map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            <div>
              {name}
            </div>
            <div>
              {score}
            </div>
            <div>
              {description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
