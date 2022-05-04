export default function ReviewList({ reviews }) {
  return (
    <>
      <h3>리뷰</h3>
      {reviews?.map(({
        id, name, score, description,
      }) => (
        <li key={id}>
          <ul>{name}</ul>
          <ul>{score}</ul>
          <ul>{description}</ul>
        </li>
      ))}
    </>
  );
}