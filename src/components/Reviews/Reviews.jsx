export default function Reviews({ reviews }) {
  return (
    <div>
      <h2>리뷰</h2>
      <ul>
        {reviews.map(({ description, id }) => (
          <li key={description}>{description}</li>
        ))}
      </ul>
    </div>
  );
}
