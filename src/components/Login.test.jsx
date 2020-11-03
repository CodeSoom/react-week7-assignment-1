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

      expect(screen.getAllByText('green')).toHaveLength(2);
      expect(screen.getByRole('button', { name: 'Log in' })).toBeEnabled();
    });
  });

  context('without id', () => {
    it('id field is red. disabled button', () => {
      renderLogin({ id: 'id' });

      expect(screen.getByText('green')).toBeInTheDocument();
      expect(screen.getByText('red')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Log in' })).toBeDisabled();
    });
  });

  context('without password', () => {
    it('password field is red. disabled button', () => {
      renderLogin({ password: 'password' });

      expect(screen.getByText('green')).toBeInTheDocument();
      expect(screen.getByText('red')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Log in' })).toBeDisabled();
    });
  });

  context('without all fields', () => {
    it('all field is red. disabled button', () => {
      renderLogin({});

      expect(screen.getAllByText('red')).toHaveLength(2);
      expect(screen.getByRole('button', { name: 'Log in' })).toBeDisabled();
    });
  });
});
