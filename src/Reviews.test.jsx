import { render } from '@testing-library/react';

import Reviews from './Reviews';

import restaurant from '../fixtures/restaurant';

describe('Reviews', () => {
  const { reviews } = restaurant;

  it('renders reviews', () => {
    const { getByText } = render(<Reviews reviews={reviews} />);

    expect(getByText('냥냥이')).not.toBeNull();
    expect(getByText('1점')).not.toBeNull();
    expect(getByText('good')).not.toBeNull();
  });
});
