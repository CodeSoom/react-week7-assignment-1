import { render } from '@testing-library/react';

import ReviewItems from './ReviewItems';

describe('ReviewItems', () => {
  context('with review items', () => {
    it('renders review items', () => {
      const reviewItems = [
        {
          description: '훌륭하다 훌륭하다 지구인놈들',
          id: 1,
          name: '테스터',
          restaurantId: 1,
          score: 5,
        },
      ];

      const { container } = render(<ReviewItems reviewItems={reviewItems} />);

      const review = reviewItems[0];
      expect(container).toHaveTextContent(review.name);
      expect(container).toHaveTextContent(`${review.score}점`);
      expect(container).toHaveTextContent(review.description);
    });
  });

  context('without reviews item', () => {
    it('renders no items message', () => {
      [[], null, undefined].forEach((reviewItems) => {
        const { container } = render(<ReviewItems reviewItems={reviewItems} />);

        expect(container).toHaveTextContent('리뷰가 없어요');
      });
    });
  });
});
