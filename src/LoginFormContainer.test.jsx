import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@gmail.com',
        password: '12345',
      },
    }));
  });

  it('renders inputs', () => {
    const { getByLabelText } = render((
      <LoginFormContainer />
    ));

    expect(getByLabelText('Email').value).toBe('test@gmail.com');
    expect(getByLabelText('Password').value).toBe('12345');
  });

  it('renders onChange', () => {
    const { getByLabelText } = render((
      <LoginFormContainer />
    ));

    fireEvent.change(getByLabelText('Email'), {
      target: { value: 'test1@gmail.com' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginField',
      payload: { name: 'email', value: 'test1@gmail.com' },
    });
  });

  it('renders Log In button', () => {
    const { getByText } = render((
      <LoginFormContainer />
    ));

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled();
  });
});
