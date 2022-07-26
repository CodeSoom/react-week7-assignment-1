export default function Reviews({ reviews = [] }) {
  return (
    <>
      <h3>리뷰</h3>
      <ul>
        {reviews.map(({
          id, name, score, description,
        }) => (
          <li key={id}>
            <div>{name}</div>
            <div>{score}</div>
            <div>{description}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
