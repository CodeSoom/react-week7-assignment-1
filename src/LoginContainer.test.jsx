import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import LoginContainer from './LoginContainer';

import LOGIN_FIELDS from '../fixtures/loginFields';

jest.mock('react-redux');

describe('LoginContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: '',
        password: '',
      },
    }));
  });

  it('renders email input', () => {
    const { queryByLabelText } = render(<LoginContainer />);

    expect(queryByLabelText('E-mail')).not.toBeNull();
  });

  it('renders password input', () => {
    const { queryByLabelText } = render(<LoginContainer />);

    expect(queryByLabelText('Password')).not.toBeNull();
  });

  it('listens email input change event', () => {
    const { getByLabelText } = render(<LoginContainer />);

    fireEvent.change(getByLabelText('E-mail'), {
      target: {
        value: LOGIN_FIELDS.email,
      },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginFields',
      payload: {
        name: 'email',
        value: LOGIN_FIELDS.email,
      },
    });
  });

  it('listens password input change event', () => {
    const { queryByLabelText } = render(<LoginContainer />);

    fireEvent.change(queryByLabelText('Password'), {
      target: {
        value: LOGIN_FIELDS.password,
      },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginFields',
      payload: {
        name: 'password',
        value: LOGIN_FIELDS.password,
      },
    });
  });

  it('renders "Log In" button', () => {
    const { queryByText } = render(<LoginContainer />);

    expect(queryByText('Log In')).not.toBeNull();
  });
});
