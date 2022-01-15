import { render } from '@testing-library/react';

import Reviews from './Reviews';

import REIVEWS from '../fixtures/reviews';

describe('Reviews', () => {
  it('renders reviews', () => {
    const { getByText } = render(<Reviews reviews={REIVEWS} />);

    expect(getByText(/냥냥이/)).not.toBeNull();
    expect(getByText(/1점/)).not.toBeNull();
    expect(getByText(/good/)).not.toBeNull();
  });
});
