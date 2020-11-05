import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  function renderTextField(label, type, name, value) {
    return render(
      <TextField
        label={label}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />,
    );
  }

  const inputTextFields = [
    {
      label: '평점', type: 'number', name: 'score', value: '',
    },
    {
      label: '리뷰 내용', type: 'text', name: 'description', value: '',
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders label and input control', () => {
    inputTextFields.forEach(({ label, type, name }) => {
      const { getByLabelText } = renderTextField(label, type, name);

      expect(getByLabelText(label)).not.toBeNull();
    });
  });

  context('with input change event', () => {
    it('calls handleChange', () => {
      const score = '5';

      const { label, type, name } = inputTextFields[0];

      const { getByLabelText } = renderTextField(label, type, name);

      const input = getByLabelText(label);

      fireEvent.change(input, {
        target: { value: score },
      });

      expect(handleChange).toBeCalled();
    });
  });
});
