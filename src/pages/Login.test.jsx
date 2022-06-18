import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import Login from './Login';

test('Login', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const { container } = render((
    <Login />
  ));

  expect(container).toHaveTextContent('Login');
});

describe('LoginForm', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    loginFields: {
      email: '',
      password: '',
    },
    auth: {
      isLoading: false,
      isError: false,
      errorMessage: '',
    },
  }));
  it('renders input controls', () => {
    const { getByLabelText, getByRole } = render((
      <Login />
    ));

    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();

    expect(getByRole('button')).toBeInTheDocument();
  });
});
