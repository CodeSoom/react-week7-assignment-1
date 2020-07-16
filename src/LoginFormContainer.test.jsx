import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  it('renders input controls', () => {
    const { getByLabelText, getByText } = render((
      <LoginFormContainer />
    ));

    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('listens change events', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    const { getByLabelText } = render((
      <LoginFormContainer />
    ));

    fireEvent.change(getByLabelText('Email'), {
      target: { value: '1234' },
    });

    expect(dispatch).toBeCalled();
  });
});
