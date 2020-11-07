import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

import restaurantReviews from '../fixtures/restaurantReviews';

describe('Reviews', () => {
  it('renders reviews', () => {
    const { getByText } = render(<Reviews reviews={restaurantReviews} />);

    expect(getByText('테스터')).not.toBeNull();
    expect(getByText('5점')).not.toBeNull();
    expect(getByText('GOOD')).not.toBeNull();
  });
});
