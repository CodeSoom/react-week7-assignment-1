import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

test('Reviews', () => {
  const { container } = render(<Reviews />);

  expect(container).toHaveTextContent('테스터');
  expect(container).toHaveTextContent('5점');
  expect(container).toHaveTextContent('훌륭하다 훌륭하다 지구인놈들');
});
