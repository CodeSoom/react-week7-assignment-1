import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import given from 'given2';

import LoginPage from './LoginPage';
import { changeLoginField } from '../modules/actions';

jest.mock('react-redux');

describe('LoginPage', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('renders "Log in" button', () => {
    const { container, getByRole } = render(<LoginPage />);

    expect(container).toHaveTextContent('Log In');

    expect(getByRole('button', { name: 'Log in' })).not.toBeNull();
  });

  it(' "Log in" button works', () => {
    const { getByRole } = render(<LoginPage />);

    fireEvent.click(getByRole('button', { name: 'Log in' }));
    expect(dispatch).toBeCalled();
  });

  it('email input works', () => {
    given('email', () => 'tester@example.com');
    const { getByLabelText } = render(<LoginPage />);

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: given.email },
    });

    expect(dispatch).toBeCalledWith(
      changeLoginField({ name: 'email', value: given.email }),
    );
  });

  it('password input works', () => {
    given('password', () => 'test');

    const { getByLabelText } = render(<LoginPage />);
    fireEvent.change(getByLabelText('Password'), {
      target: { value: given.password },
    });

    expect(dispatch).toBeCalledWith(
      changeLoginField({ name: 'password', value: given.password }),
    );
  });
});
