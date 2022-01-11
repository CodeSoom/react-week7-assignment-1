import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders input controls', () => {
    const { getByLabelText } = render(<LoginForm />);

    expect(getByLabelText('Username')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
