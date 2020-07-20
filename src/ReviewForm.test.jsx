import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const reviewFields = {
    score: '',
    description: '',
  };
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  function renderReviewForm() {
    return render(
      <ReviewForm
        reviewFields={reviewFields}
        onChange={handleChange}
        onClick={handleSubmit}
      />,
    );
  }

  it('renders the review fields', () => {
    const { getByLabelText } = renderReviewForm();

    expect(getByLabelText('평점')).not.toBeNull();
    expect(getByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('renders the review submit button', () => {
    const { getByText } = renderReviewForm();
    const reviewSubmitButton = getByText('리뷰 남기기');

    expect(reviewSubmitButton).not.toBeNull();

    fireEvent.click(reviewSubmitButton);
    expect(handleSubmit).toBeCalled();
  });

  it('listens the reviewFields change event', () => {
    const { getByLabelText } = renderReviewForm();

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '이야앗!' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({
        name,
        value,
      });
    });
  });
});
