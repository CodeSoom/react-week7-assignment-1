import React from 'react';

import { render } from '@testing-library/react';

import ReviewItems from './ReviewItems';

describe('ReviewItem', () => {
  context('with reviews', () => {
    it('render ordered review', () => {
      const reviews = [
        { id: 1, name: '테스터', score: 5, description: '맛나다' },
        { id: 2, name: '테스터', score: 3, description: '그저 그래요' },
      ];
    
      const { getAllByRole } = render(<ReviewItems reviews={reviews} />);
  
      const orderedReviews = getAllByRole('listitem');
  
  
      reviews.forEach(({
        name, score, description,
      }, index) => {
        expect(orderedReviews[index]).toHaveTextContent(name);
        expect(orderedReviews[index]).toHaveTextContent(score);
        expect(orderedReviews[index]).toHaveTextContent(description);
      });
    });
  });

  context('without reviews', () => {
    it('render no review message', () => {
      const { container } = render(<ReviewItems reviews={[]} />);

      expect(container).toHaveTextContent('리뷰가 없어요!');
    });
  });
});