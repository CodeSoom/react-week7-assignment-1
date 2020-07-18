import React from 'react';

import { render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  context('with type', () => {
    it('renders score input control', () => {
      const onChange = jest.fn();
      const { queryByLabelText } = render((
        <TextField
          label="평점"
          type="number"
          name="score"
          onChange={onChange}
        />
      ));

      expect(queryByLabelText('평점')).not.toBeNull();
    });
  });

  context('without type', () => {
    it('renders description input controls', () => {
      const onChange = jest.fn();

      const { queryByLabelText } = render((
        <TextField
          label="리뷰 내용"
          name="description"
          onChange={onChange}
        />
      ));

      expect(queryByLabelText('리뷰 내용')).not.toBeNull();
    });
  });
});
