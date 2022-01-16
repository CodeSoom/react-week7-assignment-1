import { render } from '@testing-library/react';
import LoginController from './LoginController';

describe('LoginController', () => {
  it('렌더링 된다,', () => {
    const { getByLabelText } = render(<LoginController />);

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
