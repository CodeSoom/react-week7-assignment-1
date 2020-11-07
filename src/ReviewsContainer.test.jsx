import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ReviewsContainer from './ReviewsContainer';

describe('ReviewsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    restaurant: {
      reviews: [
        {
          id: 1,
          name: '테스터',
          score: 3,
          description: '우와',
        },
      ],
    },
  }));

  it('renders name and address', () => {
    render(<ReviewsContainer />);
  });
});
