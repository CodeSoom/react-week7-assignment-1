import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import LoginContainer from './LoginContainer';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('LoginContainer', () => {
  const dispatch = jest.fn();

  context('when change id', () => {
    it('calls action setId', () => {
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        login: { id: '', password: '' },
      }));

      render(<LoginContainer />);

      fireEvent.change(
        screen.getByPlaceholderText('ID'),
        { target: { value: 'test@test.com' } },
      );

      expect(dispatch).toEqual({ type: 'setId', payload: 'test@test.com' });
    });
  });

  context('when change password', () => {
    it('calls action setPassword', () => {
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        login: { id: '', password: '' },
      }));

      render(<LoginContainer />);

      fireEvent.change(
        screen.getByPlaceholderText('PASSWORD'),
        { target: { value: 'password' } },
      );

      expect(dispatch).toEqual({ type: 'setPassword', payload: 'password' });
    });
  });

  context('when click button', () => {
    it('calls action setUser', () => {
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        login: { id: 'test@test.com', password: 'password' },
      }));

      render(<LoginContainer />);

      fireEvent.click(screen.getByRole('button'));

      expect(dispatch).toEqual({ type: 'setUser' });
    });
  });
});
