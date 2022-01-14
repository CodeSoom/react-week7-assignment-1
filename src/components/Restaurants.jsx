export default function Restaurants(
  { restaurants, onClick },
) {
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <button
            onClick={() => onClick(restaurant)}
            type="button"
          >
            {restaurant.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
