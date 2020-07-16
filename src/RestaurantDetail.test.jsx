import React from 'react';

import { render } from '@testing-library/react';

import RestaurantDetail from './RestaurantDetail';

import restaurant from '../fixtures/restaurant';

describe('RestaurantDetail', () => {
  const handleChangeReviewField = jest.fn();
  const handleSubmitReviewField = jest.fn();

  const reviewField = {
    score: '',
    description: '',
  };

  it('renders Restaurant info', () => {
    const { container, getByLabelText, getByRole } = render(
      <RestaurantDetail
        restaurant={restaurant}
        reviewField={reviewField}
        onChangeReviewField={handleChangeReviewField}
        onSubmitReviewField={handleSubmitReviewField}
      />,
    );

    expect(container).toHaveTextContent('양천주가');

    expect(container).toHaveTextContent('서울 강남구');

    expect(container).toHaveTextContent('탕수육');
    expect(container).toHaveTextContent('팔보채');

    expect(getByLabelText('평점')).toHaveAttribute('type', 'number');
    expect(getByLabelText('내용')).toHaveAttribute('type', 'text');

    expect(getByRole('button', { name: '리뷰 남기기' })).toBeInTheDocument();

    expect(container).toHaveTextContent('테스터');
    expect(container).toHaveTextContent('5');
    expect(container).toHaveTextContent('완벽해요');
  });
});
