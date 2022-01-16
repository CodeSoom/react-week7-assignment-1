import { render } from '@testing-library/react';
import LoginController from './LoginController';

describe('LoginController', () => {
  it('렌더링 된다,', () => {
    const { getByRole } = render(<LoginController />);

    expect(getByRole('input', { name: 'E-mail' })).not.toBeNull();
    expect(getByRole('input', { name: 'Password' })).not.toBeNull();
  });
});
