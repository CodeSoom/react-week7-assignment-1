import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ReviewsContainer from './ReviewsContainer';

test('ReviewsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      reviews: [
        { name: '테스터', score: 3, description: '우와' },
      ],
    },
  }));

  const { container } = render(
    <ReviewsContainer />,
  );

  expect(container).toHaveTextContent('테스트');
});
