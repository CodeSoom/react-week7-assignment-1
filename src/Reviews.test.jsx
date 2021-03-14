import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  const reviews = [
    {
      id: 1,
      name: 'tester',
      score: '5',
      description: '맛있어요!',
    },
  ];

  context('with reviews', () => {
    it('renders names and descriptions', () => {
      const { container } = render(<Reviews reviews={reviews} />);

      expect(container).toHaveTextContent('tester');
      expect(container).toHaveTextContent('맛있어요!');
    });
  });

  context('without reviews', () => {
    it('renders no review message', () => {
      const { container } = render(<Reviews />);

      expect(container).toHaveTextContent('등록된 리뷰가 없습니다');
    });
  });
});
