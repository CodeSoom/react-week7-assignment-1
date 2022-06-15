import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
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
