import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  context('with input type', () => {
    it('renders label and input control', () => {
      const { queryByLabelText, container } = render((
        <TextField
          label="평점"
          type="number"
          name="score"
          onChange={handleChange}
        />
      ));

      expect(queryByLabelText('평점')).not.toBeNull();

      expect(container).toContainHTML('type="number"');
    });
  });

  context('without input type', () => {
    it('renders label and "text" input control', () => {
      const { queryByLabelText, container } = render((
        <TextField
          label="리뷰 설명"
          name="description"
          onChange={handleChange}
        />
      ));

      expect(queryByLabelText('리뷰 설명')).not.toBeNull();

      expect(container).toContainHTML('type="text"');
    });
  });

  context('when a form field value is changed', () => {
    it('runs handleChange', () => {
      const name = 'score';
      const value = '5';

      const { getByLabelText } = render((
        <TextField
          label="평점"
          type="number"
          name={name}
          onChange={handleChange}
        />
      ));

      fireEvent.change(getByLabelText('평점'), {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });
});
