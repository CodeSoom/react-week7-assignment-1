import { render } from '@testing-library/react';

import LoginFromContainer from './LoginFromContainer';

describe('LoginFromContainer', () => {
  // 아이디, 패스워드 인풋이 보여야한다.
  it('renders input controls', () => {
    const { getByLabelText } = render(
      <LoginFromContainer />,
    );

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
