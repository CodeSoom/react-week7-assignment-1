import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  function renderTextField({
    label,
    value,
    type,
    name,
  }) {
    return render((
      <TextField
        label={label}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    ));
  }

  context('with type', () => {
    const label = '평점';
    const type = 'number';
    const name = 'score';
    const value = '5';
    it('renders label', () => {
      const { getByLabelText } = renderTextField({
        label,
        type,
        value,
        name,
      });
      expect(getByLabelText('평점')).not.toBeNull();
    });

    it('renders input control', () => {
      const { container } = renderTextField({
        label,
        type,
        value,
        name,
      });
      expect(container).toContainHTML('type="number"');
    });

    it('renders value', () => {
      const { getByLabelText } = renderTextField({
        label,
        type,
        value,
        name,
      });
      expect(getByLabelText('평점').value).toBe(value);
    });
  });

  context('without type', () => {
    const label = '리뷰 내용';
    const name = 'description';
    const value = '맛있어요';

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

    it('renders value', () => {
      const { getByLabelText } = renderTextField({
        label,
        value,
        name,
      });
      expect(getByLabelText('리뷰 내용').value).toBe(value);
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
