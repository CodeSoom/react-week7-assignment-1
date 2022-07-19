import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('<LoginFormContainer />', () => {
  const renderLoginFormContainer = () => render((<LoginFormContainer />));

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('renders submit button', () => {
    const { getByText } = renderLoginFormContainer();

    const button = getByText('Log In');

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'submit');
  });
});
