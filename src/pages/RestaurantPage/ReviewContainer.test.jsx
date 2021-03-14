import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';
import given from 'given2';

import ReviewContainer from './ReviewContainer';

describe('ReviewContainer', () => {
  const dispatch = jest.fn();

  given('reviews', () => ([
    {
      id: 1,
      restaurantId: 1,
      name: '테스터',
      score: 5,
      description: '훌륭하다 훌륭하다 지구인놈들',
    },
  ]));

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      reviews: given.reviews,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  context('with reviews', () => {
    it('renders reviews', () => {
      const { container } = render(<ReviewContainer />);

      expect(container).toHaveTextContent('테스터');
    });
  });

  context('without reviews', () => {
    given('reviews', () => []);

    it('renders reviews', () => {
      const { container } = render(<ReviewContainer />);

      expect(container).toHaveTextContent('리뷰가 없습니다.');
    });
  });
});
