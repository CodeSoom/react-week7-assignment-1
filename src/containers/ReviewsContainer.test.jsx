import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ReviewsContainer from './ReviewsContainer';

describe('ReviewsContainer', () => {
  function renderReviewsContainer() {
    return render(<ReviewsContainer />);
  }

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
      restaurant: given.restaurant,
    }));
  });

  context('with reviews', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
      reviews: [
        {
          description: '훌륭하다 훌륭하다 지구인놈들',
          id: 1,
          name: '테스터',
          restaurantId: 1,
          score: 5,
        },
      ],
    }));

    it('renders review', () => {
      const { container } = renderReviewsContainer();

      expect(container).toHaveTextContent('테스터');
      expect(container).toHaveTextContent('5점');
      expect(container).toHaveTextContent('훌륭하다 훌륭하다 지구인놈들');
    });
  });

  context('without reviews', () => {
    given('restaurant', () => ({
      id: 1,
      name: '마법사주방',
      address: '서울시 강남구',
      reviews: [],
    }));

    it('renders no reviews message', () => {
      const { container } = renderReviewsContainer();

      expect(container).toHaveTextContent('리뷰가 없어요');
    });
  });
});
