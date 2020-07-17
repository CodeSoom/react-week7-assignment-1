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
        email: 'test@test',
        password: '123',
      },
    }));
  });

  it('renders input control', () => {
    const { getByLabelText } = render(<LoginFormContainer />);

    // expect(getByLabelText('E-mail')).toBe('test@test');
    // expect(getByLabelText('Password')).toBe('123');
  });

  it('renders Log In button', () => {
    const { getByText } = render((
      <LoginFormContainer />
    ));

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled();
  });
});
