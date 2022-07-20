import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const renderLoginFormContainer = () => render((
    <LoginFormContainer />
  ));

  it('renders inputs', () => {
    const { getByLabelText } = renderLoginFormContainer();

    const labels = ['E-mail', 'Password'];

    labels.forEach((label) => {
      expect(getByLabelText(label)).toBeInTheDocument();
    });
  });

  it('renders login button', () => {
    const { getByRole } = renderLoginFormContainer();

    expect(getByRole('button', { name: 'Log In' })).toBeInTheDocument();
  });
});
