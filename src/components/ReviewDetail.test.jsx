import { render } from '@testing-library/react';

import ReviewDetail from './ReviewDetail';

describe('ReviewDetail', () => {
  const renderReviewDetail = (reviews) => (
    render(<ReviewDetail reviews={reviews} />)
  );

  it('화면에 리뷰 정보가 나타난다.', () => {
    const reviews = [{
      description: '이게 맞아?',
      id: 1157,
      name: '테스터',
      restaurantId: 6,
      score: 2,
    },
    {
      description: 'GOODQ!!!!!',
      id: 1213,
      name: '테스터',
      restaurantId: 6,
      score: 3,
    }];
    const { getByText, getAllByText } = renderReviewDetail(reviews);

    expect(getAllByText('테스터')).not.toBeNull();
    expect(getByText('3')).not.toBeNull();
    expect(getByText('GOODQ!!!!!')).not.toBeNull();
  });
});
