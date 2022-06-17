import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    loginFields: {
      email: '',
      password: '',
    },
    auth: {
      isLogin: false,
      isLoading: false,
      isError: false,
      errorMessage: '',
    },
  }));

  it('renders input controls', () => {
    const { getByLabelText, getByRole } = render((
      <LoginFormContainer />
    ));

    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();

    expect(getByRole('button')).toBeInTheDocument();
  });
});
