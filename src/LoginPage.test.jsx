import LoginPage from './LoginPage';
import { render } from '@testing-library/react';

describe('LoginPage', () => {
  const renderLoginPage = () => render(<LoginPage />);
  it('LoginPage render', () => {
    const { container } = renderLoginPage();
    expect(container).toHaveTextContent('로그인페이지');
  });
});
