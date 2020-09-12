import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test.com',
        password: 'test',
      },
      accessToken: given.accessToken,
    }));
  });

  context('when not logged in', () => {
    given('accessToken', () => '');

    it('renders input controls', () => {
      const { getByLabelText } = render(
        <LoginFormContainer />,
      );

      expect(getByLabelText('Email').value).toBe('test@test.com');
      expect(getByLabelText('Password').value).toBe('test');
    });

    it('listens change events', () => {
      const handleChange = jest.fn();

      const { getByLabelText } = render(
        <LoginFormContainer onChange={handleChange} />,
      );

      fireEvent.change(getByLabelText('Email'), {
        target: { value: 'new@email' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: { name: 'email', value: 'new@email' },
      });
    });

    it('renders "Login" Button', () => {
      const { container } = render(
        <LoginFormContainer />,
      );

      expect(container).toHaveTextContent('Login');
    });

    it('listens "Login" Button click event', () => {
      const { getByText } = render(
        <LoginFormContainer />,
      );

      fireEvent.click(getByText('Login'));

      expect(dispatch).toBeCalled();
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders "Logout" Button', () => {
      const { container } = render(
        <LoginFormContainer />,
      );

      expect(container).toHaveTextContent('Logout');
    });

    it('listens "Logout" Button click event', () => {
      const { getByText } = render(
        <LoginFormContainer />,
      );

      fireEvent.click(getByText('Logout'));

      expect(dispatch).toBeCalledWith({ type: 'logout' });
    });
  });
});
