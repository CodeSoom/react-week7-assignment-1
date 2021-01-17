import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleClick = jest.fn();
  const renderReviewForm = () => render(
    <ReviewForm
      score={1}
      description="this is review"
      onChange={handleChange}
      onClick={handleClick}
    />,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders reivew field', () => {
    const { container } = renderReviewForm();

    expect(container).toHaveTextContent('평점');
    expect(container).toHaveTextContent('리뷰 내용');
  });

  it('renders register reivew button', () => {
    const { getByText } = renderReviewForm();

    expect(getByText('리뷰 남기기')).not.toBeNull();
  });

  describe('review field change', () => {
    it('calls field change action', () => {
      const { getByLabelText } = renderReviewForm();

      fireEvent.change(getByLabelText('평점'), { target: { value: '10' } });

      fireEvent.change(getByLabelText('리뷰 내용'), { target: { value: '이것은 리뷰다' } });

      expect(handleChange).toBeCalledTimes(2);
    });
  });

  describe('login button click', () => {
    it('calls request login action', () => {
      const { getByText } = renderReviewForm();

      fireEvent.click(getByText('리뷰 남기기'));

      expect(handleClick).toBeCalled();
    });
  });
});
