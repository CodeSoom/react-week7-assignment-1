import React from 'react';

import { render } from '@testing-library/react';

import Reviews from './Reviews';

describe('Reviews', () => {
  const reviews = [
    {
      id: 1, name: '홍길동', score: '5', description: '동에번쩍 서에번쩍 할 맛',
    },
    {
      id: 2, name: '임꺽정', score: '4', description: '관아를 뒤집을 맛',
    },
  ];

  it('renders the reviewer names, scores and descriptions', () => {
    const { container } = render((
      <Reviews reviews={reviews} />
    ));

    expect(container).toHaveTextContent('리뷰');
    expect(container).toHaveTextContent('홍길동');
    expect(container).toHaveTextContent('4');
    expect(container).toHaveTextContent('동에번쩍 서에번쩍 할 맛');
  });
});
