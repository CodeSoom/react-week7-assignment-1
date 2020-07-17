import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

test('Reviews', () => {
  const { getByText } = render((
    <Reviews />
  ));

  expect(getByText(/리뷰/)).not.toBeNull();

  expect(getByText(/테스터/)).not.toBeNull();
  expect(getByText(/3점/)).not.toBeNull();
  expect(getByText(/오오/)).not.toBeNull();
});
