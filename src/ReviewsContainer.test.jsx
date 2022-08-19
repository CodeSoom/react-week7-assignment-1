import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ReviewsContainer from './ReviewsContainer';

test('ReviewsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      reviews: [
        {
          id: 15,
          restaurantId: 2,
          name: '테스터',
          score: 5,
          description: '테스트중입니다!!',
        },
      ],
    },
  }));

  const { container } = render(
    <ReviewsContainer />,
  );

  expect(container).toHaveTextContent('테스터');
});
