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
      loginField: {
        email: 'test@test.co.kr',
        password: 'test',
      },
      accessToken: given.accessToken,
    }));
  });

  const renderLoginFormContainer = () => render(<LoginFormContainer />);

  context('when logged out', () => {
    given('accessToken', () => '');

    it('renders login fields', () => {
      const { getByLabelText } = renderLoginFormContainer();

      expect(getByLabelText('E-mail').value).toBe('test@test.co.kr');
      expect(getByLabelText('Password').value).toBe('test');
    });

    it('renders "login" button', () => {
      const { getByText } = renderLoginFormContainer();

      expect(getByText('Login')).not.toBeNull();
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders "logout" button', () => {
      const { container } = renderLoginFormContainer();

      expect(container).toHaveTextContent('LOGOUT');
    });
  });
});
