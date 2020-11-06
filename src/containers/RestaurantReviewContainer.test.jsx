import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import RestaurantReviewContainer from './RestaurantReviewContainer';

describe('RestaurantReviewContainer', () => {
  const renderRestaurantReviewContainer = () => render(<RestaurantReviewContainer />);

  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders component', () => {
    useSelector.mockImplementation((selector) => selector({
      review: 'review',
    }));

    renderRestaurantReviewContainer();

    expect(screen.getByDisplayValue('review')).toBeInTheDocument();
  });

  context('when changes review', () => {
    it('call onChange', () => {
      useSelector.mockImplementation((selector) => selector({
        review: '',
      }));

      renderRestaurantReviewContainer();

      fireEvent.change(
        screen.getByPlaceholderText('리뷰를 작성해 주세요!'),
        'r',
      );

      expect(dispatch).toBeCalled();
    });
  });

  context('when click button', () => {
    it('call onClick', () => {
      useSelector.mockImplementation((selector) => selector({
        review: 'review',
      }));

      renderRestaurantReviewContainer();

      fireEvent.click(
        screen.getByRole('button', { name: '작성하기' }),
      );

      expect(dispatch).toBeCalled();
    });
  });
});
