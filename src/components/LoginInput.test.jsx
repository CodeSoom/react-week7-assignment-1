import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import LoginInput from './LoginInput';

describe('LoginInput', () => {
  const handleChange = jest.fn();

  const renderLoginInput = (value) => render(
    <LoginInput value={value} onChange={handleChange} />,
  );

  context('with value', () => {
    it('renders green', () => {
      renderLoginInput('value');

      expect(screen.getByText('green')).toBeInTheDocument();
    });
  });

  context('without field', () => {
    it('renders red', () => {
      renderLoginInput();

      expect(screen.getByText('red')).toBeInTheDocument();
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
