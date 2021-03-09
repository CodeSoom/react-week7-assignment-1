import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import given from 'given2';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      accessToken: given.accessToken,
      loginFields: {
        email: '',
        password: '',
      },
    }));
  });

  context('without login', () => {
    given('accessToken', () => '');

    it('renders login form', () => {
      const { queryByLabelText, getByText } = render(<LoginFormContainer />);

      expect(queryByLabelText('Email')).not.toBeNull();
      expect(queryByLabelText('Password')).not.toBeNull();

      fireEvent.click(getByText('Log In'));

      expect(dispatch).toBeCalled();
    });

    it('listens to input change events', () => {
      const { getByLabelText } = render(<LoginFormContainer />);

      fireEvent.change(getByLabelText('Email'), {
        target: { name: 'email', value: 'test@test.com' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: { name: 'email', value: 'test@test.com' },
      });
    });
  });

  context('with login', () => {
    given('accessToken', () => 'TOKEN');

    it('renders logged on status message', () => {
      const { container } = render(<LoginFormContainer />);

      expect(container).toHaveTextContent('로그인 되었습니다.');
    });
  });
});
