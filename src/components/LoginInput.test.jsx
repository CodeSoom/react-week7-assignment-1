import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import LoginInput from './LoginInput';

describe('LoginInput', () => {
  const handleChange = jest.fn();

  const renderLoginInput = ({ type, value, placeholder } = {}) => render(
    <LoginInput
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />,
  );

  context('with value', () => {
    it('renders valid', () => {
      renderLoginInput({ value: 'value' });

      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'false');
    });
  });

  context('without field', () => {
    it('renders placeholder "ID"', () => {
      renderLoginInput({ placeholder: 'ID' });

      expect(screen.getByPlaceholderText('ID')).toBeInTheDocument();
    });

    it('renders invalid', () => {
      renderLoginInput();

      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });
  });

  context('when value is changed', () => {
    it('called onChange', () => {
      renderLoginInput();

      expect(handleChange).not.toBeCalled();

      fireEvent.change(
        screen.getByRole('textbox'),
        { target: { value: 'value' } },
      );

      expect(handleChange).toBeCalled();
    });
  });
});
