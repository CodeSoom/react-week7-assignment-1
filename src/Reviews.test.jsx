import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  it('renders reviews', () => {
    const { getByText } = render(<Reviews />);

    expect(getByText('정말 맛있어요!')).not.toBeNull();
  });
});
