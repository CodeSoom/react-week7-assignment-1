import { fireEvent, render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    loginFields: {
      email: '',
      password: '',
    },
  }));

  const renderLoginPage = () => render(
    <LoginFormContainer />,
  );

  it('Login 버튼을 누르면 dispatch가 호출된다.', () => {
    const { getByRole } = renderLoginPage();

    fireEvent.click(getByRole('button', { name: 'Log in' }));
    expect(dispatch).toHaveBeenCalled();
  });
});
