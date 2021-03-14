import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

test('Reviews', () => {
  const reviews = [
    {
      id: 1,
      restaurantId: 1,
      name: '테스터',
      score: 5,
      description: '훌륭하다 훌륭하다 지구인놈들',
    },
  ];
  const { getByText } = render((
    <Reviews
      reviews={reviews}
    />
  ));
  expect(getByText('리뷰')).not.toBeNull();
  expect(getByText('훌륭하다 훌륭하다 지구인놈들')).not.toBeNull();
});
