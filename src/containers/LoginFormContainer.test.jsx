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
        password: '1234',
      },
    }));
  });

  it('renders input element', () => {
    const { getByLabelText } = render(
      <LoginFormContainer />,
    );

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();

    expect(getByLabelText('E-mail').value).toBe('test@test.com');
    expect(getByLabelText('Password').value).toBe('1234');
  });

  it('renders login button', () => {
    const { getByText } = render(
      <LoginFormContainer />,
    );

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled();
  });
});
