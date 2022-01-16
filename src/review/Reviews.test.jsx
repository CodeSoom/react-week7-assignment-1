import { render } from '@testing-library/react';

import Reviews from './Reviews';

/*
1. restaurant의 props에 따라서 잘 보여주는가?
*/

describe('Reviews', () => {
  it('render 3 reviews at maximum', () => {
    const reviews = [
      {
        id: 1, name: '테스터', score: 5, description: '정말 최고입니다',
      },
      {
        id: 2, name: '테스터', score: 3, description: '위생상태가 별로예요',
      },
      {
        id: 3, name: '테스터', score: 1, description: '다 별로예요',
      },
    ];
    const { container } = render(<Reviews reviews={reviews} />);

    reviews.forEach(({ name, score, description }) => {
      expect(container).toHaveTextContent(name);
      expect(container).toHaveTextContent(score);
      expect(container).toHaveTextContent(description);
    });
  });
});
