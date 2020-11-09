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
    useSelector.mockImplementation((selector) => selector({
      review: { description: 'review', score: 5 },
      accessToken: 'token',
    }));
  });

  context('with accessToken', () => {
    it('renders component', () => {
      renderRestaurantReviewContainer();

      expect(screen.getByDisplayValue('review')).toBeInTheDocument();
      expect(screen.getByDisplayValue('5')).toBeInTheDocument();
    });
  });

  context('without accessToken', () => {
    it('renders nothing', () => {
      useSelector.mockImplementation((selector) => selector({
        review: { description: 'review', score: 5 },
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

    it('call onChangeDescription', () => {
      renderRestaurantReviewContainer();

      fireEvent.change(
        screen.getByPlaceholderText('리뷰를 작성해 주세요!'),
        { target: { value: '매일 먹습니다.' } },
      );

      expect(dispatch).toBeCalled();
    });
  });

  context('when click button', () => {
    it('call onClick', () => {
      renderRestaurantReviewContainer(8);

      fireEvent.click(
        screen.getByRole('button', { name: '리뷰 남기기' }),
      );

      expect(dispatch).toBeCalled();
    });
  });
});
