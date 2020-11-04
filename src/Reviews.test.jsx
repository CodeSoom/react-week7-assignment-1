import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  it('renders title', () => {
    const reviews = [];

    const { container } = render(<Reviews reviews={reviews}/>);

    expect(container).toHaveTextContent('리뷰');
  });

  context('with reviews', () => {
    it('renders reviews', () => {
      const reviews = [
        {
          name: '테스터',
          score: 5,
          description: '훌륭하다 훌륭하다 지구인놈들',
        },
        {
          name: '테스터',
          score: 3,
          description: '맛있네요!',
        },
      ];

      const { container } = render(<Reviews reviews={reviews} />);

      reviews.forEach(({ name, score, description }) => {
        expect(container).toHaveTextContent(name);
        expect(container).toHaveTextContent(score);
        expect(container).toHaveTextContent(description);
      });
    });
  });

  context('without reviews', () => {
    it('render no review message', () => {
      const reviews = [];

      const { container } = render(<Reviews reviews={reviews} />);

      expect(container).toHaveTextContent('리뷰가 없어요!');
    });
  });
});
