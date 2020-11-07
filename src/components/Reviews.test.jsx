import React from 'react';
import { render, screen } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  const renderReviews = (reviews) => render(<Reviews reviews={reviews} />);

  context('with reviews', () => {
    it('renders reviews', () => {
      renderReviews([
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
      renderReviews();

      expect(screen.queryByText(/테스터/)).not.toBeInTheDocument();
      expect(screen.queryByText(/★★★★★/)).not.toBeInTheDocument();
      expect(screen.queryByText(/매일 먹어요/)).not.toBeInTheDocument();
    });
  });

  context('when score over 5', () => {
    it('score fixed to 5', () => {
      renderReviews([
        {
          id: 2, name: '테스터', score: 2, description: '으...',
        },
        {
          id: 1, name: '테스터', score: 23253255, description: '매일 먹어요',
        },
      ]);

      expect(screen.getByText(/★★★★★/)).toBeInTheDocument();
    });
  });
});
