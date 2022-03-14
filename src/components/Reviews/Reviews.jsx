export default function Reviews({ reviews }) {
  return (
    <div>
      <h2>리뷰</h2>
      <ul>
        {!reviews.length
          ? '리뷰가 존재하지 않습니다.'
          : reviews.map(({
            name, score, description, id,
          }) => (
            <li key={id}>
              <ul>
                <li>{name}</li>
                <li>
                  {score}
                  점
                </li>
                <li>{description}</li>
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}
