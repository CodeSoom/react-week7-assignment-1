import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import RestaurantReviewContainer from './RestaurantReviewContainer';

describe('RestaurantReviewContainer', () => {
  const renderRestaurantReviewContainer = (restaurantId) => render(
    <RestaurantReviewContainer
      restaurantId={restaurantId}
    />,
  );

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  context('with accessToken', () => {
    it('renders component', () => {
      useSelector.mockImplementation((selector) => selector({
        review: {
          description: 'review',
          score: 5,
        },
        accessToken: 'token',
      }));

      renderRestaurantReviewContainer();

      expect(screen.getByDisplayValue('review')).toBeInTheDocument();
      expect(screen.getByDisplayValue('5')).toBeInTheDocument();
    });
  });

  context('without accessToken', () => {
    it('renders nothing', () => {
      useSelector.mockImplementation((selector) => selector({
        review: {
          description: 'review',
          score: 5,
        },
        accessToken: '',
      }));

      renderRestaurantReviewContainer();

      expect(screen.queryByDisplayValue('review')).not.toBeInTheDocument();
      expect(screen.queryByDisplayValue('5')).not.toBeInTheDocument();
    });
  });

  context('when changes review', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        review: {},
        accessToken: 'token',
      }));
    });

    it('call onChangeScore', () => {
      renderRestaurantReviewContainer();

      fireEvent.change(
        screen.getByPlaceholderText('평가 점수'),
        { target: { value: 5 } },
      );

      expect(dispatch).toBeCalled();
    });

    it('call onChangeScore', () => {
      renderRestaurantReviewContainer();

      fireEvent.change(
        screen.getByPlaceholderText('평가 점수'),
        { target: { value: 5 } },
      );

      expect(dispatch).toBeCalled();
    });
  });

  context('when click button', () => {
    it('call onClick', () => {
      useSelector.mockImplementation((selector) => selector({
        review: {
          description: 'review',
          score: 5,
        },
        accessToken: 'token',
      }));

      renderRestaurantReviewContainer(8);

      fireEvent.click(
        screen.getByRole('button', { name: '작성하기' }),
      );

      expect(dispatch).toBeCalled();
    });
  });
});
