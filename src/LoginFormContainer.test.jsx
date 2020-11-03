import React from 'react';

import { fireEvent, render } from '@testing-library/react';

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
        email: 'test@test', password: '1234',
      },
    }));
  });

  const renderLoginFormContainer = () => render(<LoginFormContainer />);

  it('input control이 보입니다.', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail').value).toBe('test@test');

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'new email' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginField',
      payload: {
        name: 'email', value: 'new email',
      },
    });

    expect(getByLabelText('Password').value).toBe('1234');

    fireEvent.change(getByLabelText('Password'), {
      target: { value: 'new password' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginField',
      payload: {
        name: 'password', value: 'new password',
      },
    });
  });

  it('"Log in" 버튼이 보입니다.', () => {
    const { getByText } = renderLoginFormContainer();

    fireEvent.click(getByText('Log In'));
    expect(dispatch).toBeCalled();
  });
});
