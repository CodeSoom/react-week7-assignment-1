import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  function renderTextField(type) {
    return render(
      <TextField
        label="E-mail"
        name="email"
        textValue="test@test"
        type={type}
        onChange={handleChange}
      />,
    );
  }

  it('renders label and input control', () => {
    const { getByLabelText } = renderTextField();

    expect(getByLabelText('E-mail')).not.toBeNull();
  });

  it('listen change events', () => {
    const { getByLabelText } = renderTextField();

    const input = getByLabelText('E-mail');

    fireEvent.change(input, { target: { value: 'test@test.com' } });

    expect(handleChange).toBeCalled();
  });

  context('without type', () => {
    it('renders "text" input control', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="text"');
    });
  });

  context('with type', () => {
    const type = 'number';

    it('renders input control with type', () => {
      const { container } = renderTextField(type);

      expect(container).toContainHTML(`type="${type}"`);
    });
  });
});
