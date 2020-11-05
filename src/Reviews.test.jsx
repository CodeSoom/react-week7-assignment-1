import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  it('renders', () => {
    const { container } = render(<Reviews />);

    expect(container).toHaveTextContent('리뷰');
    expect(container).toHaveTextContent('테스터');
    expect(container).toHaveTextContent('5점');
    expect(container).toHaveTextContent('맛있어요.');
  });
});
