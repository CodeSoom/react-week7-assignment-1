import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('<LoginPage />', () => {
  const renderLoginPage = () => render((<LoginPage />));

  it('renders page title', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Log In');
  });
});
