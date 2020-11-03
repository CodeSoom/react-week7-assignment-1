import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: '',
        password: '',
      },
    }));
  });

  it('renders input controls', () => {
    const { getByLabelText } = render(<LoginFormContainer />);

    fireEvent.change(getByLabelText('E-mail'), { target: { value: 'test' } });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginFields',
      payload: { email: 'test' },
    });

    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('renders "Log In" button', () => {
    const { getByText } = render(<LoginFormContainer />);

    fireEvent.click(getByText('로그인'));

    expect(dispatch).toBeCalled();
  });
});
