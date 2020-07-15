import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders input control', () => {
    const { getByText } = render(<LoginFormContainer />);

    expect(getByText('E-mail')).not.toBeNull();
    expect(getByText('Password')).not.toBeNull();
  });

  it('renders Log In button', () => {
    const { getByText } = render((
      <LoginFormContainer />
    ));

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled();
  });
});
