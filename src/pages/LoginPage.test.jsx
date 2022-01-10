import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('Log In');
  });

  // TODO: Login Container?
  // Login Input, 및 Log In 버튼 테스트
  // e2e 테스트를 Page 에서 해도 될듯
});
