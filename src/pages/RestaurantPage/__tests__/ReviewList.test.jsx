import React from 'react';

import { render } from '@testing-library/react';

import ReviewList from '../ReviewList';

import restaurant from '../../../../fixtures/restaurant';

describe('ReviewList', () => {
  it('제목과 리뷰들을 화면에 그린다.', () => {
    const { queryByText } = render(<ReviewList reviews={restaurant.reviews} />);

    expect(queryByText('리뷰')).toBeInTheDocument();
    expect(queryByText('맛있네요?')).toBeInTheDocument();
    expect(queryByText('훌륭하다 훌륭하다 지구인놈들')).toBeInTheDocument();
  });
});
