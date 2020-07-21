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
    const label = '평점';
    const type = 'number';
    const name = 'score';
    it('renders label', () => {
      const { getByLabelText } = renderTextField({
        label,
        type,
        name,
      });
      expect(getByLabelText('평점')).not.toBeNull();
    });

    it('renders input control', () => {
      const { container } = renderTextField({
        label,
        type,
        name,
      });
      expect(container).toContainHTML('type="number"');
    });
  });

  context('without type', () => {
    const label = '리뷰 내용';
    const name = 'description';

    it('renders label', () => {
      const { getByLabelText } = renderTextField({
        label,
        name,
      });
      expect(getByLabelText('리뷰 내용')).not.toBeNull();
    });

    it('renders input control', () => {
      const { container } = renderTextField({
        label,
        name,
      });
      expect(container).toContainHTML('type="text"');
    });
  });

  it('listens change events', () => {
    const label = '평점';
    const type = 'number';
    const name = 'score';
    const value = '5';
    const { getByLabelText } = renderTextField({
      label,
      type,
      name,
    });

    fireEvent.change(getByLabelText(label), { target: { value } });
    expect(handleChange).toBeCalledWith({ name, value });
  });
});
