import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const renderLoginFormContainer = () => render(
    <LoginFormContainer />,
  );

  it('E-mail - input이 렌더링된다', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail')).not.toBeNull();
  });

  it('Password - input이 렌더링된다', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('Password')).not.toBeNull();
  });
});
