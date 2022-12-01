import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ReviewsContainer from './ReviewsContainer';

import REVIEWS from '../fixtures/reviews';

jest.mock('react-redux');

describe('ReviewsContainer', () => {
  const dispatch = jest.fn();

  function renderReviewsContainer() {
    return render((<ReviewsContainer restaurantId="1" />));
  }

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      reviews: given.reviews,
    }));
  });

  context('without reviews', () => {
    given('reviews', () => []);

    it('renders "리뷰가 없습니다!"', () => {
      const { container } = renderReviewsContainer();

      expect(container).toHaveTextContent('리뷰가 없습니다!');
    });
  });

  context('with reviews', () => {
    given('reviews', () => REVIEWS);

    it('renders reviews', () => {
      const { container } = renderReviewsContainer();

      expect(container).toHaveTextContent('맛있어요');
    });
  });
});
