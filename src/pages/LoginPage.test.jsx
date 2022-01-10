import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('Log In');
  });

  it('renders email and password inputs and login button', () => {
    const { queryByLabelText, queryByRole } = render((
      <LoginPage />
    ));

    expect(queryByLabelText('E-mail')).toBeInTheDocument();
    expect(queryByLabelText('Password')).toBeInTheDocument();

    expect(queryByRole('button', { name: 'Log In' })).toBeInTheDocument();
  });

  // TODO: Login Container?
  // Login Input, 및 Log In 버튼 테스트
  // e2e 테스트를 Page 에서 해도 될듯
});
