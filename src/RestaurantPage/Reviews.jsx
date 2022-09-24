export default function Reviews({ reviews }) {
  return (
    <>
      <h3>리뷰</h3>
      <ul>
        {reviews.map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            <p>{name}</p>
            <p>
              {score}
              점
            </p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
