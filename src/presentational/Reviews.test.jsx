import React from 'react';

import { render } from '@testing-library/react';

import Reviews from 'presentational/Reviews';

test('Reviews', () => {
  const reviews = [
    {
      id: 1, restaurantId: 1, name: 'hyejineee', score: 5, description: '훌륭하다 훌륭하다 지구인놈들',
    },
  ];
  const { container } = render(
    <Reviews reviews={reviews} />,
  );

  expect(container).toHaveTextContent(reviews[0].name);
  expect(container).toHaveTextContent(reviews[0].description);
});
