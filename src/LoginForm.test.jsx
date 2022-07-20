import { fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  const renderLoginForm = () => render(
    <LoginForm onSubmit={dispatch} />,
  );

  it('E-mail - input이 렌더링된다', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('E-mail')).not.toBeNull();
  });

  it('Password - input이 렌더링된다', () => {
    const { getByLabelText } = renderLoginForm();

    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('login - button이 렌더링된다', () => {
    const { getByText } = renderLoginForm();

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled();
  });
});
