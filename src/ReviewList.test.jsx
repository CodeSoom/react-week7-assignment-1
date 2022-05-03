import { render } from '@testing-library/react';

import ReviewList from './ReviewList';

describe('ReviewList', () => {
  function renderReviewList() {
    return render(
      <ReviewList
        reviews={given.reviewList}
      />,
    );
  }

  context('리뷰가 있을 때', () => {
    given('reviewList', () => [{
      id: 1,
      restaurantId: 1,
      name: '피카츄',
      score: 5,
      description: '피카츄가 더 최고야!',
    },
    {
      id: 3,
      restaurantId: 1,
      name: '라이츄',
      score: 3,
      description: '라이츄가 최고야!',
    }]);

    it('리뷰를 렌더링 한다.', () => {
      const { queryByText } = renderReviewList();

      expect(queryByText('리뷰')).not.toBeNull();
      expect(queryByText('피카츄')).not.toBeNull();
      expect(queryByText(5)).not.toBeNull();
      expect(queryByText('피카츄가 더 최고야!')).not.toBeNull();
    });
  });

  context('리뷰가 없을 때', () => {
    given('reviewList', () => []);

    it('"리뷰가 없어요!"를 출력한다.', () => {
      const { queryByText } = renderReviewList();

      expect(queryByText('리뷰가 없어요!')).not.toBeNull();
    });
  });
});
