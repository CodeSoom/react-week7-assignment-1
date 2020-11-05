import React from 'react';

import { render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  function renderTextField(label, type, name) {
    return render(
      <TextField
        label={label}
        type={type}
        name={name}
        onChange={handleChange}
      />,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders label and input control', () => {
    const inputTextFields = [
      { label: '평점', type: 'number', name: 'score' },
      { label: '리뷰 내용', type: 'text', name: 'description' },
    ];

    inputTextFields.forEach(({ label, type, name }) => {
      const { getByLabelText } = renderTextField(label, type, name);

      expect(getByLabelText(label)).not.toBeNull();
    });
  });
});
