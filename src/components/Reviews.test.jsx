import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  const reviews = [{
    id: 1,
    name: '테스터',
    description: '맛있어요',
    score: 5,
  }];

  function renderReviews() {
    return render((
      <Reviews reviews={reviews} />
    ));
  }
  it('renders name and description', () => {
    const { container } = renderReviews();

    expect(container).toHaveTextContent('맛있어요');
  });
});
