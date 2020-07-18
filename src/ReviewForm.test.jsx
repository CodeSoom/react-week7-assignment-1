import React from 'react';

import { render } from '@testing-library/react';

import ReviewForm from './ReviewForm';

describe('ReviewForm', () => {
  it('renders review input controls', () => {
    const { queryByLabelText } = render((
      <ReviewForm />
    ));

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 남기기')).not.toBeNull();
  });
});
