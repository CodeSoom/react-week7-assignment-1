import { render } from '@testing-library/react';

import Reviews from './Reviews';

import REIVEWS from '../fixtures/reviews';

describe('Reviews', () => {
  it('renders reviews', () => {
    const { container } = render(<Reviews reviews={REIVEWS} />);

    expect(container).toHaveTextContent('냥냥이');
    expect(container).toHaveTextContent('1점');
    expect(container).toHaveTextContent('good');
  });
});
