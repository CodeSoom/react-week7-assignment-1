import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  function renderTextField({ label, type, name }) {
    return render((
      <TextField
        label={label}
        type={type}
        name={name}
        onChange={handleChange}
      />
    ));
  }

  context('with type', () => {
    it('renders label and input control', () => {
      const { container, queryByLabelText } = renderTextField({
        label: '평점',
        type: 'number',
        name: 'score',
      });

      expect(queryByLabelText('평점')).not.toBeNull();
      expect(container).toContainHTML('type="number"');
    });
  });

  context('without type', () => {
    it('renders label and input control', () => {
      const { container, queryByLabelText } = renderTextField({
        label: '리뷰 설명',
        name: 'description',
      });

      expect(queryByLabelText('리뷰 설명')).not.toBeNull();
      expect(container).toContainHTML('type="text');
    });
  });

  it('renders review write fields', () => {
    const name = 'score';
    const value = '5';

    const { getByLabelText } = renderTextField({
      label: '평점',
      name,
    });

    fireEvent.change(
      getByLabelText('평점'),
      { target: { value } },
    );

    expect(handleChange).toBeCalledWith({ name, value });
  });
});
