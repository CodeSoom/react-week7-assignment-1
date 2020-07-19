import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

test('Reviews', () => {
  const reviews = [
    {
      id: 1,
      name: '테스터',
      score: 3,
      description: '오오',
    },
  ];

  const { getByText } = render((
    <Reviews
      reviews={reviews}
    />
  ));

  expect(getByText(/리뷰/)).not.toBeNull();

  expect(getByText(/테스터/)).not.toBeNull();
  expect(getByText(/3점/)).not.toBeNull();
  expect(getByText(/오오/)).not.toBeNull();
});
