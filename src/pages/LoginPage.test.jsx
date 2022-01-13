import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  const renderLoginPage = () => (
    render(<LoginPage />)
  );

  it('로그인 텍스트를 보여준다.', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('로그인');
  });
});
