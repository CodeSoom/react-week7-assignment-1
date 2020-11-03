import React from 'react';
import { render, screen } from '@testing-library/react';

import Login from './Login';

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
    it('all green and clickable button', () => {
      renderLogin({ id: 'id', password: 'passowrd' });

      screen.getAllByRole('textbox').forEach((input) => {
        expect(input).toHaveAttribute('aria-invalid', 'false');
      });
      expect(screen.getByRole('button', { name: 'Log in' })).toBeEnabled();
    });
  });

  context('without one field', () => {
    it('password field is red. disabled button', () => {
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
    it('all field is red. disabled button', () => {
      renderLogin({});

      screen.getAllByRole('textbox').forEach((input) => {
        expect(input).toHaveAttribute('aria-invalid', 'true');
      });
      expect(screen.getByRole('button', { name: 'Log in' })).toBeDisabled();
    });
  });
});
