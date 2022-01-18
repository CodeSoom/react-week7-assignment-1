export default function Review({ review }) {
  const {
    name, score, description,
  } = review;

  return (
    <article>
      <p>{name}</p>
      <p>{score}</p>
      <p>{description}</p>
    </article>
  );
}
