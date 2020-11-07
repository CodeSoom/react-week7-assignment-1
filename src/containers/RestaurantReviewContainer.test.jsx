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

  it('renders component', () => {
    useSelector.mockImplementation((selector) => selector({
      review: {
        description: 'review',
        score: 5,
      },
    }));

    renderRestaurantReviewContainer();

    expect(screen.getByDisplayValue('review')).toBeInTheDocument();
    expect(screen.getByDisplayValue('5')).toBeInTheDocument();
  });

  context('when changes review', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        review: {},
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
      }));

      renderRestaurantReviewContainer(8);

      fireEvent.click(
        screen.getByRole('button', { name: '작성하기' }),
      );

      expect(dispatch).toBeCalled();
    });
  });
});
