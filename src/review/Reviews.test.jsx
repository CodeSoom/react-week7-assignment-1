import { render, fireEvent } from "@testing-library/react";

import Reviews from "./Reviews";

/*
1. restaurant의 props에 따라서 잘 보여주는가?
*/

describe("Reviews", () => {
  const reviews = [
    { name: "테스터", score: 5, description: "정말 최고입니다" },
    { name: "테스터", score: 3, description: "위생상태가 별로예요" },
  ];
  const { container } = rendr(<Reviews reviews={reviews} />);

  reviews.forEach(({ name, score, description }) => {
    expect(container).toHaveTextContent(name);
    expect(container).toHaveTextContent(score);
    expect(container).toHaveTextContent(description);
  });
});
