import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const renderLoginForm = () => render(
    <MemoryRouter initialEntries={['/login']}>
      <LoginForm />
    </MemoryRouter>,
  );

  it('renders title', () => {
    const { container } = renderLoginForm();

    expect(container).toHaveTextContent('Log In');
  });

  it('renders login form', () => {
    const { queryByLabelText } = renderLoginForm();

    expect(queryByLabelText('E-mail')).not.toBeNull();
    expect(queryByLabelText('Password')).not.toBeNull();
  });
});
