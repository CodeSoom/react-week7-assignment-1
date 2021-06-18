import { fireEvent, render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const renderLoginFormContainer = () => render(
    <LoginFormContainer />,
  );

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  it('renders "Log In" button', () => {
    const { getByText } = renderLoginFormContainer();

    fireEvent.click(getByText('Log In'));
  });
});
