import { render, fireEvent } from "@testing-library/react";

import ReviewForm from "./ReviewForm";

describe("ReviewForm", () => {
  const handleReviewChange = jest.fn();
  const handleReviewSubmit = jest.fn();

  beforeEach(() => {
    handleReviewChange.mockClear();
    handleReviewSubmit.mockClear();
  });

  function renderReviewForm({ score, description } = {}) {
    return render(
      <ReviewForm
        reviewField={{ score, description }}
        onChange={handleReviewChange}
        onClick={handleReviewSubmit}
      />
    );
  }
  it("renders review write Form", () => {
    const { queryByLabelText, getByRole } = renderReviewForm();

    expect(queryByLabelText("평점")).not.toBeNull();
    expect(queryByLabelText("리뷰내용")).not.toBeNull();
    expect(getByRole("button", { name: "리뷰 남기기" }));
  });

  it("change review wirte Form", () => {
    const score = 1;
    const description = "별루예요";
    const { queryByLabelText } = renderReviewForm({
      score,
      description,
    });
    const controls = [
      { label: "평점", name: "score", value: "5" },
      { label: "리뷰내용", name: "description", value: "정말 좋았어요" },
    ];

    controls.forEach((control) => {
      const { label, name, value } = control;
      const input = queryByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(handleReviewChange).toBeCalledWith({ name, value });
    });
  });

  it("review write Form submitted", () => {
    const { getByRole } = renderReviewForm();

    fireEvent.click(getByRole("button", { name: "리뷰 남기기" }));

    expect(handleReviewSubmit).toBeCalled();
  });
});
