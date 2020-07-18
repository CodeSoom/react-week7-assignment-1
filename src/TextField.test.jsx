import React from 'react';

import { render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  it('renders review input controls', () => {
    const { queryByLabelText } = render((
      <TextField />
    ));

    expect(queryByLabelText('평점')).not.toBeNull();
    expect(queryByLabelText('리뷰 내용')).not.toBeNull();
  });
});
