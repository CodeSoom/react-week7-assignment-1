import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  const reviews = [
    {
      id: 1, restaurantId: 1, name: '테스터', score: 5, description: '훌륭하다',
    },
  ];

  context('without reviews', () => {
    it('renders "리뷰가 없습니다! 첫번째 리뷰를 남겨주세요."', () => {
      const { container } = render((
        <Reviews />
      ));

      expect(container).toHaveTextContent('리뷰가 없습니다! 첫번째 리뷰를 남겨주세요.');
    });
  });

  context('with reviews', () => {
    it('renders reviews', () => {
      const { container } = render((
        <Reviews reviews={reviews} />
      ));

      expect(container).toHaveTextContent('테스터');
      expect(container).toHaveTextContent('5');
      expect(container).toHaveTextContent('훌륭하다');
    });
  });
});
