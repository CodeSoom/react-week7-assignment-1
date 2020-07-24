import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
    handleSubmit.mockClear();
  });

  function renderReviewForm({ score, description } = {}) {
    return render(<ReviewForm
      fields={{ score, description }}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />);
  }

  it('renders review write form', () => {
    const { getByLabelText } = renderReviewForm({});

    expect(getByLabelText('평점')).not.toBeNull();
    expect(getByLabelText('리뷰 내용')).not.toBeNull();
  });

  it('renders value', () => {
    const { getByLabelText } = renderReviewForm({
      score: '5',
      description: '맛있어요',
    });

    expect(getByLabelText('평점').value).toBe('5');
    expect(getByLabelText('리뷰 내용').value).toBe('맛있어요');
  });

  it('renders button', () => {
    const { getByText } = renderReviewForm({});

    expect(getByText('리뷰 남기기')).not.toBeNull();
  });

  it('listens click events', () => {
    const { getByText } = renderReviewForm({});

    fireEvent.click(getByText('리뷰 남기기'));
    expect(handleSubmit).toBeCalled();
  });
});
