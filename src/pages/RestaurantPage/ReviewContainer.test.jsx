import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { render, screen } from '@testing-library/react';
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

  given('restaurant', () => ({
    id: 1,
    name: '마법사주방',
    address: '서울시 강남구',
    reviews: given.reviews,
  }));

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      restaurant: given.restaurant,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  context('without restaurant', () => {
    given('restaurant', () => null);
    it('renders loading', () => {
      render(<ReviewContainer />);

      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  context('with restaurant', () => {
    context('with reviews', () => {
      it('renders reviews', () => {
        const { container } = render(<ReviewContainer />);

        expect(container).toHaveTextContent('테스터');
      });
    });

    context('without reviews', () => {
      given('reviews', () => null);
      it('renders reviews', () => {
        const { container } = render(<ReviewContainer />);

        expect(container).toHaveTextContent('리뷰가 없습니다.');
      });
    });
  });
});
