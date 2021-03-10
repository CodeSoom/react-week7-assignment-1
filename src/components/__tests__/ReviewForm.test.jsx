import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import ReviewForm from '@components/ReviewForm';

describe('ReviewForm', () => {
  const onChange = jest.fn();
  const onSubmit = jest.fn();

  it('renders input fields', () => {
    const { getByLabelText } = render(<ReviewForm onChange={onChange} />);

    const scoreInput = getByLabelText('평점');
    const reviewInput = getByLabelText('리뷰');

    expect(scoreInput).toHaveAttribute('name', 'score');
    expect(reviewInput).toHaveAttribute('name', 'description');

    expect(scoreInput).toHaveAttribute('type', 'number');
    expect(reviewInput).toHaveAttribute('type', 'text');

    fireEvent.change(scoreInput, { target: { value: '3' } });
    fireEvent.change(reviewInput, { target: { value: '그만큼 맜있다는 거지' } });
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('renders button ', () => {
    onSubmit.mockImplementationOnce((event) => {
      event.preventDefault();
    });
    const { getByRole } = render(<ReviewForm onSubmit={onSubmit} />);

    const postReviewButton = getByRole('button', { name: '리뷰 남기기' });

    expect(postReviewButton).toBeInTheDocument();

    fireEvent.click(postReviewButton);
    expect(onSubmit).toHaveBeenCalled();
  });
});