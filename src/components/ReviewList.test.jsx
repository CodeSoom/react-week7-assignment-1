import React from 'react';
import { render, screen } from '@testing-library/react';

import ReviewList from './ReviewList';

describe('ReviewList', () => {
  const renderReviewList = (reviews) => render(<ReviewList reviews={reviews} />);

  context('with reviews', () => {
    it('renders reviews', () => {
      renderReviewList([
        {
          id: 1, name: '테스터', score: 5, description: '매일 먹어요',
        },
      ]);

      expect(screen.getByText(/테스터/)).toBeInTheDocument();
      expect(screen.getByText(/★★★★★/)).toBeInTheDocument();
      expect(screen.getByText(/매일 먹어요/)).toBeInTheDocument();
    });
  });

  context('without reviews', () => {
    it('renders nothing', () => {
      renderReviewList();

      expect(screen.queryByText(/테스터/)).not.toBeInTheDocument();
      expect(screen.queryByText(/★★★★★/)).not.toBeInTheDocument();
      expect(screen.queryByText(/매일 먹어요/)).not.toBeInTheDocument();
    });
  });
});
