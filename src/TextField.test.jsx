import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

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

  it('renders label and input control', () => {
    const { container } = renderTextField('평점', 'text', 'score');

    expect(container).toHaveTextContent('평점');
  });

  it('listen change events', () => {
    const { getByLabelText } = renderTextField();

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: '최고의 맛!' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });
});
