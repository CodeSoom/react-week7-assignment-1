import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplemenetation(() => dispatch);
  });

  it('renders login form', () => {
    const { getByLabelText, getByText } = render(<LoginFormContainer />);

    expect(getByLabelText('Email')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled();
  });
});
