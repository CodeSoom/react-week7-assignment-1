import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import LoginContainer from './LoginContainer';

test('LoginContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    login: {
      id: '',
      password: '',
    },
  }));

  render(<LoginContainer />);

  expect(screen.getByPlaceholderText('ID')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('PASSWORD')).toBeInTheDocument();
  expect(screen.getByRole('button')).toBeInTheDocument();

  fireEvent.change(
    screen.getByPlaceholderText('ID'),
    { target: { value: 'test@test.com' } },
  );

  expect(dispatch).toEqual({ type: 'setId', payload: 'test@test.com' });
});
