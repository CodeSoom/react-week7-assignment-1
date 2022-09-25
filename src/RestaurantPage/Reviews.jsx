export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return null;
  }

  return (
    <>
      <h3>리뷰</h3>
      <ul>
        {reviews.map(({
          id, name, score, description,
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
    </>
  );
}
