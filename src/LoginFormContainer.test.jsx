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
        email: '',
        password: '',
      },
      accessToken: given.accessToken,
    }));
  });

  const renderLoginFormContainer = () => render(<LoginFormContainer />);

  context('when logged out', () => {
    given('accessToken', () => '');

    it('renders login fields', () => {
      const { getByLabelText } = renderLoginFormContainer();

      expect(getByLabelText('E-mail').value).toBe('');
      expect(getByLabelText('Password').value).toBe('');
    });

    it('dispatch changeLoginField', () => {
      const { getByLabelText } = renderLoginFormContainer();

      const controls = [
        { label: 'E-mail', value: 'test@test.co.kr' },
        { label: 'Password', value: 'test' },
      ];

      controls.forEach(({ label, value }) => {
        const input = getByLabelText(label);

        fireEvent.change(input, { target: { value } });
      });

      expect(dispatch).toBeCalledTimes(2);
    });

    it('renders "Log In" button', () => {
      const { getByText } = renderLoginFormContainer();

      expect(getByText('Log In')).not.toBeNull();
    });

    it('dispatch setAccessToken when click "Log In" button', () => {
      const { getByText } = renderLoginFormContainer();

      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalled();
    });
  });

  context('when logged in', () => {
    given('accessToken', () => 'ACCESS_TOKEN');

    it('renders "Log out" button', () => {
      const { container } = renderLoginFormContainer();

      expect(container).toHaveTextContent('Log out');
    });

    it('dispatch setAccessToken click "Log out" button', () => {
      const { getByText } = renderLoginFormContainer();

      fireEvent.click(getByText('Log out'));

      expect(dispatch).toBeCalledWith({ type: 'logout' });
    });
  });
});
