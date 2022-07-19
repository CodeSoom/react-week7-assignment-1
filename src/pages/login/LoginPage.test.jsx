import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('<LoginPage />', () => {
  const renderLoginPage = () => render((<LoginPage />));

  it('renders page title', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('Log In');
  });

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginPage();

    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    const { getByText } = renderLoginPage();

    expect(getByText('Log In', {
      selector: 'button',
    })).toBeInTheDocument();
  });
});
