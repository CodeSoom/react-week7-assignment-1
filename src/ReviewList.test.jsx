import { render } from '@testing-library/react';

import ReviewList from './ReviewList';

describe('ReviewList', () => {
  const reviews = [
    {
      id: 1,
      name: '테스터',
      score: 3,
      description: '맛있어요',
    },
    {
      id: 2,
      name: 'user1',
      score: 4,
      description: '짱맛있어요',
    },
  ];

  it('renders reviewer name, score and description', () => {
    const { container } = render((
      <ReviewList reviews={reviews} />
    ));

    reviews.forEach(({ name, score, description }) => {
      expect(container).toHaveTextContent(name);
      expect(container).toHaveTextContent(score);
      expect(container).toHaveTextContent(description);
    });
  });
});
