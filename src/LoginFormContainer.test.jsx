import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';
import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders input controls', () => {
    const { getByLabelText } = render((
      <LoginFormContainer />
    ));

    expect(getByLabelText('Email')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('renders Login button', () => {
    const { getByText } = render((
      <LoginFormContainer />
    ));

    fireEvent.click(getByText('Login'));

    expect(dispatch).toBeCalled();
  });
});
