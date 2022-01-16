import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';
/*
1. 로그인 타이틀이 보인다
2. 밑에 input, button이 보인다
*/

describe('LoginPage', () => {
  useSelector.mockImplementation((selector) => selector({
    loginField: {
      email: '오우',
      password: '굿',
    },
  }));
  it('renders LogIn title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('Login');
  });

  it('renders email and password inputs and login button', () => {
    const { queryByLabelText, queryByRole } = render(<LoginPage />);

    expect(queryByLabelText('Email')).toBeInTheDocument();
    expect(queryByLabelText('Password')).toBeInTheDocument();

    expect(queryByRole('button', { name: 'Log In' })).toBeInTheDocument();
  });
});
