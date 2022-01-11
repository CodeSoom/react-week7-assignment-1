import { render } from '@testing-library/react';

import ReviewItems from './Reviews';

describe('Reviews', () => {
  context('with reviews', () => {
    it('renders reviews', () => {
      const reviews = [
        {
          description: '훌륭하다 훌륭하다 지구인놈들',
          id: 1,
          name: '테스터',
          restaurantId: 1,
          score: 5,
        },
      ];

      const { container } = render(<ReviewItems reviews={reviews} />);

      const review = reviews[0];
      expect(container).toHaveTextContent(review.name);
      expect(container).toHaveTextContent(`${review.score}점`);
      expect(container).toHaveTextContent(review.description);
    });
  });

  context('without reviews item', () => {
    it('renders no items message', () => {
      [[], null, undefined].forEach((reviews) => {
        const { container } = render(<ReviewItems reviews={reviews} />);

        expect(container).toHaveTextContent('리뷰가 없어요');
      });
    });
  });
});
