import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  context('without type', () => {
    function renderTextField() {
      return render(
        <TextField
          label="E-mail"
          name="email"
          textValue="test@test"
          onChange={handleChange}
        />,
      );
    }

    it('renders label and input control', () => {
      const { getByLabelText } = renderTextField();

      expect(getByLabelText('E-mail')).not.toBeNull();
    });

    it('renders "text" input control', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="text"');
    });

    it('listen change events', () => {
      const { getByLabelText } = renderTextField();

      const input = getByLabelText('E-mail');

      fireEvent.change(input, { target: { value: 'test@test.com' } });

      expect(handleChange).toBeCalled();
    });
  });

  context('with type', () => {
    function renderTextField() {
      return render(
        <TextField
          label="E-mail"
          name="email"
          textValue="test@test"
          type="number"
          onChange={handleChange}
        />,
      );
    }

    it('renders label and input control', () => {
      const { getByLabelText } = renderTextField();

      expect(getByLabelText('E-mail')).not.toBeNull();
    });

    it('renders "number" input control', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="number"');
    });

    it('listen change events', () => {
      const { getByLabelText } = renderTextField();

      const input = getByLabelText('E-mail');

      fireEvent.change(input, { target: { value: 'test@test.com' } });

      expect(handleChange).toBeCalled();
    });
  });
});
