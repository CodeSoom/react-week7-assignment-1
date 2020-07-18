import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  function renderReviewForm() {
    return render((
      <ReviewForm onChange={handleChange} />
    ));
  }

  it('renders review input controls', () => {
    const { queryByLabelText } = renderReviewForm();

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 남기기')).not.toBeNull();
  });

  it('listens change event', () => {
    const { getByLabelText } = renderReviewForm();

    fireEvent.change(getByLabelText('평점'), {
      target: { value: '5' },
    });

    expect(handleChange).toBeCalledWith({
      name: 'score',
      value: '5',
    });
  });
});
