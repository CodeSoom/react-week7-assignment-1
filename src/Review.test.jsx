// 관심사: 상태그려주기
import { render } from '@testing-library/react';

import Review from './Review';

describe('Review', () => {
  const reviews = [{ score: 5, description: '짱맛' }];

  const renderReview = () => render((
    <Review
      reviews={reviews}
    />
  ));

  it('renders score and description from reviews', () => {
    const { container } = renderReview();

    expect(container).toHaveTextContent(5);
    expect(container).toHaveTextContent('짱맛');
  });
});
