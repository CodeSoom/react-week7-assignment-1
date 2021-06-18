import { render } from '@testing-library/react';

import Reviews from './Reviews';

import REVIEWS from '../fixtures/reviews';

describe('Reviews', () => {
  context('with reviews', () => {
    const reviews = REVIEWS;

    it('reders reviews title', () => {
      const { container } = render(<Reviews reviews={reviews} />);

      expect(container).toHaveTextContent('리뷰');
    });

    it('reders reivews list', () => {
      const { container } = render(<Reviews reviews={reviews} />);

      expect(container).toHaveTextContent('5');
      expect(container).toHaveTextContent('훌륭하다 지구놈들');
    });
  });

  context('without reviews', () => {
    it('renders no items message', () => {
      [[], null, undefined].forEach((reviews) => {
        const { container } = render(<Reviews reviews={reviews} />);

        expect(container).toHaveTextContent('리뷰가 없어요!');
      });
    });
  });
});
