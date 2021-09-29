import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const renderLoginFormContainer = () => render(
    <LoginFormContainer />,
  );

  it('renders login field', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('e-mail')).not.toBeNull();
    expect(getByLabelText('password')).not.toBeNull();
  });
});
