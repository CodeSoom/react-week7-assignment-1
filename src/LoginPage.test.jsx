import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders "Log In" title', () => {
    const { container } = render((<LoginPage />));

    expect(container).toHaveTextContent('Log In');
  });
});
