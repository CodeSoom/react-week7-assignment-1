import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  it('renders email input field', () => {
    const { container } = render(<LoginFormContainer />);

    expect(container).toHaveTextContent('E-mail');
  });

  it('renders password input field', () => {
    const { container } = render(<LoginFormContainer />);

    expect(container).toHaveTextContent('Password');
  });
});
