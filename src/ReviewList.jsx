export default function ReviewList({ reviews }) {
  if (!(reviews || []).length) {
    return (
      <p>리뷰가 없어요!</p>
    );
  }

  /**
    * description: "훌륭하다 훌륭하다 지구인놈들"
    * id: 1
    * name: "테스터"
    * restaurantId: 1
    * score: 5
    */

  return (
    <>
      <h2>리뷰</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <div>{review.name}</div>
            <div>{review.score}</div>
            <div>{review.description}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
