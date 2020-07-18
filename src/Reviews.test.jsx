import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  it('renders reviews', () => {
    const { container } = render(<Reviews />);

    expect(container).toHaveTextContent('리뷰');
  });
});
