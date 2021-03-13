import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  it('renders reviews', () => {
    const reviews = [{
      id: 1, name: '홍콩반점', score: 10, description: '홍콩 가버렷 ♥︎',
    }];
    const { container } = render((<Reviews reviews={reviews} />));

    expect(container).toHaveTextContent('홍콩 가버렷 ♥︎');
  });
});
