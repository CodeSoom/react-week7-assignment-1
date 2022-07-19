import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('<LoginFormContainer />', () => {
  const renderLoginFormContainer = () => render((<LoginFormContainer />));

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });
});
