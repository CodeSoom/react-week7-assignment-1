import React from 'react';

import ReviewList from './ReviewList';

describe('ReviewList', () => {
  it('renders label and input control', () => {
    const { queryByLabelText } = renderTextField();

    expect(queryByLabelText('리뷰 설명')).not.toBeNull();
  });
});
