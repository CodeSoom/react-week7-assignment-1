import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  context('with reviews', () => {
    const reviews = [
      {
        id: 1, name: '홍길동', score: '5', description: '동에번쩍 서에번쩍 할 맛',
      },
      {
        id: 2, name: '임꺽정', score: '4', description: '관아를 뒤집을 맛',
      },
    ];

    it('renders the reviewer names, scores and descriptions', () => {
      const { container } = render((
        <Reviews reviews={reviews} />
      ));

      reviews.forEach(({
        name, score, description,
      }) => {
        expect(container).toHaveTextContent(name, score, description);
      });
    });
  });

  context('without reviews', () => {
    const reviews = [];

    it('renders the empty reviews comment', () => {
      const { container } = render((
        <Reviews reviews={reviews} />
      ));

      expect(container).toHaveTextContent('리뷰가 없어요ㅜ');
    });
  });
});
