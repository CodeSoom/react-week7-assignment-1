import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  it('renders input controls', () => {
    const { getByLabelText } = render(<LoginFormContainer />);

    expect(getByLabelText('Username')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
