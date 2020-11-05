import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import LoginContainer from './LoginContainer';

describe('LoginContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  context('when change fields', () => {
    beforeEach(() => {
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        email: '', password: '',
      }));
    });

    it('calls action setEmail', () => {
      render(<LoginContainer />);

      fireEvent.change(
        screen.getByPlaceholderText('EMAIL'),
        { target: { value: 'test@test.com' } },
      );

      expect(dispatch).toBeCalled();
    });

    it('calls action setPassword', () => {
      render(<LoginContainer />);

      fireEvent.change(
        screen.getByPlaceholderText('PASSWORD'),
        { target: { value: 'password' } },
      );

      expect(dispatch).toBeCalled();
    });
  });

  context('when click button', () => {
    beforeEach(() => {
      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        email: 'email', password: 'password',
      }));
    });

    it('calls action setUser', () => {
      render(<LoginContainer />);

      fireEvent.click(screen.getByRole('button'));

      expect(dispatch).toBeCalled();
    });
  });
});
