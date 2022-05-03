import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders title', () => {
    const { container } = render(<LoginPage />);

    expect(container).toHaveTextContent('Login 페이지');
  });
});
