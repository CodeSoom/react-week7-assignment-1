export default function Reviews({ reviews }) {
  if (!reviews || !reviews.length) {
    return (
      <p>처음으로 리뷰를 남겨주세요!</p>
    );
  }

  return (
    <ul>
      {
        reviews.map(({
          name, score, description, id,
        }) => (
          <li key={id}>
            <div>{name}</div>
            <div>{score}</div>
            <div>{description}</div>
          </li>
        ))
      }
    </ul>
  );
}
