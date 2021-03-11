import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import RestaurantReview from './RestaurantReview';

import REVIEWS from '../fixtures/reviews';

const { score: SCORE, description: DESCRIPTION } = REVIEWS;

describe('RestaurantReview', () => {
  const handleChange = jest.fn();

  function renderRestaurantReview() {
    return render(
      <RestaurantReview
        score=""
        description=""
        onChange={handleChange}
      />,
    );
  }

  beforeEach(() => {
    handleChange.mockClear();
  });

  it('renders review form', () => {
    const { queryByLabelText, queryByText } = renderRestaurantReview();

    expect(queryByLabelText('평점').value).toBe('');
    expect(queryByLabelText('리뷰 내용').value).toBe('');
    expect(queryByText('리뷰 남기기')).not.toBeNull();
  });

  it('listens change event', () => {
    const { queryByLabelText } = renderRestaurantReview();

    fireEvent.change(queryByLabelText('평점'), {
      target: {
        value: SCORE,
      },
    });

    expect(handleChange).toBeCalledWith({
      name: 'score',
      value: SCORE,
    });

    fireEvent.change(queryByLabelText('리뷰 내용'), {
      target: {
        value: DESCRIPTION,
      },
    });

    expect(handleChange).toBeCalledWith({
      name: 'description',
      value: DESCRIPTION,
    });
  });
});
