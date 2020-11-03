import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Login from './Login';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Login', () => {
  const handleChange = jest.fn();

  const renderLogin = ({ id, password }) => render(
    <Login
      id={id}
      password={password}
      onChange={handleChange}
    />,
  );
  context('with all fields', () => {
    it('all valid and clickable button', () => {
      renderLogin({ id: 'id', password: 'passowrd' });

      screen.getAllByRole('textbox').forEach((input) => {
        expect(input).toHaveAttribute('aria-invalid', 'false');
      });
      expect(screen.getByRole('button', { name: 'Log in' })).toBeEnabled();
    });
  });

  context('without one field', () => {
    it('password field is invalid. disabled button', () => {
      renderLogin({ id: 'id' });

      expect(screen.getByDisplayValue('id'))
        .toHaveAttribute('aria-invalid', 'false');
      expect(screen.getByPlaceholderText('PASSWORD'))
        .toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByRole('button', { name: 'Log in' }))
        .toBeDisabled();
    });
  });

  context('without all fields', () => {
    it('all field is invalid. disabled button', () => {
      renderLogin({});

      screen.getAllByRole('textbox').forEach((input) => {
        expect(input).toHaveAttribute('aria-invalid', 'true');
      });
      expect(screen.getByRole('button', { name: 'Log in' })).toBeDisabled();
    });
  });

  context('when change input', () => {
    it('called onChange', () => {
      renderLogin({});

      expect(handleChange).not.toBeCalled();

      fireEvent.change(
        screen.getAllByRole('textbox')[0],
        { target: { value: 'id' } },
      );

      expect(handleChange).toBeCalled();
    });
  });
});
