import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginContainer from './LoginContainer';

describe('<LoginContainer />', () => {
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

  it('renders email and password input', () => {
    const { getByLabelText } = render(
      <LoginContainer />,
    );

    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('listens input change events', () => {
    const { getByLabelText } = render(
      <LoginContainer />,
    );

    fireEvent.change(getByLabelText('E-mail'), {
      target: {
        name: 'email',
        value: 'test@test.com',
      },
    });

    expect(dispatch).toBeCalledTimes(1);

    dispatch.mockClear();

    fireEvent.change(getByLabelText('Password'), {
      target: {
        name: 'password',
        value: 'test',
      },
    });

    expect(dispatch).toBeCalledTimes(1);
  });
});
