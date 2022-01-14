import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import {
  changeLoginField,
} from './actions';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders login components', () => {
    const { getByLabelText, getByRole } = render(<LoginFormContainer />);

    expect(getByLabelText('E-mail', { name: 'email' })).not.toBeNull();
    expect(getByLabelText('Password', { name: 'password' })).not.toBeNull();
    expect(getByRole('button', { name: 'Log In' })).not.toBeNull();
  });

  it('renders input fields to change the input value', () => {
    const { getByLabelText } = render(<LoginFormContainer />);

    fireEvent.change(getByLabelText('E-mail', { target: { value: 'test@test.com' } }));

    expect(dispatch).toBeCalledWith(changeLoginField({ name: 'email', value: 'test@test.com' }));

    fireEvent.change(getByLabelText('Password', { target: { value: '123456' } }));

    expect(dispatch).toBeCalledWith(changeLoginField({ name: 'password', value: '123456' }));
  });
});
