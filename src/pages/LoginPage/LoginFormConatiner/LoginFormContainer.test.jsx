import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const renderLoginFormContainer = () => render(<LoginFormContainer />);

  it('renders email input', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail')).toBeInTheDocument();
  });

  it('renders password input', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('renders login button', () => {
    const { getByRole } = renderLoginFormContainer();

    expect(getByRole('button', { name: 'Log In' })).toBeInTheDocument();
  });
});
