import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { changeLoginFields } from './actions';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
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

  it('renders input controls', () => {
    const { getByLabelText } = render(<LoginFormContainer />);

    const controls = [
      {
        label: 'E-mail',
        name: 'email',
        value: 'test',
      },
      {
        label: 'Password',
        name: 'password',
        value: 'test',
      },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(dispatch).toBeCalledWith(changeLoginFields({ name, value }));
    });
  });

  it('renders "Log In" button', () => {
    const { getByText } = render(<LoginFormContainer />);

    fireEvent.click(getByText('로그인'));

    expect(dispatch).toBeCalled();
  });
});
