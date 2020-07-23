import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  context('when reviews are existed', () => {
    it('renders review list', () => {
      const name = '테스터';
      const score = '5';
      const description = '맛있어요';

      const reviews = [
        {
          id: 12,
          restaurantId: 3,
          name,
          score,
          description,
        },
      ];

      const { getByText } = render(<Reviews reviews={reviews} />);

      expect(getByText('리뷰')).toBeInTheDocument();
      expect(getByText(/평점/)).toBeInTheDocument();
      expect(getByText(score, { exact: false })).toBeInTheDocument();
      expect(getByText(/리뷰 내용/)).toBeInTheDocument();
      expect(getByText(description, { exact: false })).toBeInTheDocument();
    });
  });

  context('when review is empty', () => {
    it('renders "리뷰가 없어요!" message', () => {
      const { container } = render(<Reviews reviews={[]} />);

      expect(container).toHaveTextContent('리뷰가 없어요!');
    });
  });
});
