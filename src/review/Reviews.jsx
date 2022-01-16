export default function Reviews({ reviews }) {
  return (
    <>
      <h3>리뷰</h3>
      <ul>
        {reviews.slice(-3).map(({ name, score, description }) => (
          <>
            <li>
              <div>{name}</div>
              <div>{score}</div>
              <div>{description}</div>
            </li>
          </>
        ))}
      </ul>
    </>
  );
}
