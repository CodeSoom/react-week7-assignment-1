import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import LoginPage from './LoginPage';

const dispatch = jest.fn();

describe('LoginPage', () => {
  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: '',
        password: '',
      },
    }));
  });

  const renderLoginPage = () => render(
    <LoginPage />,
  );

  it('페이지 제목이 있다.', () => {
    const { getByRole } = renderLoginPage();

    expect(getByRole('heading', { level: 2 })).toHaveTextContent('Login');
  });

  it('아이디와 비밀번호를 입력할 수 있는 input과 버튼이 있다.', () => {
    const { getByRole, getByLabelText } = renderLoginPage();

    expect(getByRole('textbox', { name: 'E-mail' })).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Log in' })).toBeInTheDocument();
  });
});
