import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  const mockState = (state = {}) => {
    useSelector.mockImplementation((selector) => selector(state));
  };

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  context('when logged-out', () => {
    beforeEach(() => {
      mockState({
        loginFields: {},
        accessToken: null,
      });
    });

    it('renders input-controls', () => {
      const { queryByLabelText, getByLabelText } = render(
        <LoginFormContainer />,
      );

      expect(queryByLabelText('E-mail')).not.toBeNull();

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'tester@example.com' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: {
          name: 'email',
          value: 'tester@example.com',
        },
      });
    });

    it('renders login button', () => {
      const { getByText } = render(
        <LoginFormContainer />,
      );

      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalled();
    });
  });

  context('when logged-in', () => {
    beforeEach(() => {
      mockState({
        accessToken: 'ACCESS_TOKEN',
      });
    });

    it('renders log-out button', () => {
      const { getByText } = render(
        <LoginFormContainer />,
      );

      fireEvent.click(getByText('Log out'));
    });
  });
});
