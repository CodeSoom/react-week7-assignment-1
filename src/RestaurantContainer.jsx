import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import RestaurantDetail from "./RestaurantDetail";
import ReviewForm from "./review/ReviewForm";
import Reviews from "./review/Reviews";

import { loadRestaurant, changeReviewField, sendReview } from "./actions";

import { get } from "./utils";

export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get("restaurant"));
  const { score, description } = useSelector(get("reviewField"));

  if (!restaurant) {
    return <p>Loading...</p>;
  }

  function handleReviewChange({ name, value }) {
    dispatch(changeReviewField({ name, value }));
  }

  function handleReviewSubmit() {
    dispatch(sendReview({ restaurantId }));
  }

  return (
    <>
      <RestaurantDetail restaurant={restaurant} />
      <ReviewForm
        reviewField={{ score, description }}
        onChange={handleReviewChange}
        onClick={handleReviewSubmit}
      />
      <Reviews reviews={restaurant.reviews} />
    </>
  );
}
