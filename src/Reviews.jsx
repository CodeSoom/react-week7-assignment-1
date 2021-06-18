export default function Reviews({ reviews }) {
  if (!(reviews || []).length) {
    return (
      <p>리뷰가 없어요!</p>
    );
  }

  return (
    <div>
      <h3>리뷰</h3>
      <ul>
        {reviews.sort((a, b) => (b.id - a.id)).map(({
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
