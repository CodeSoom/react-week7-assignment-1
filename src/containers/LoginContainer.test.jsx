import { render } from '@testing-library/react';

import LoginContainer from './LoginContainer';

describe('LoginContainer', () => {
  // 근데 이거는 컴포넌트 테스트 아닌가?
  it('renders email and password inputs and "Log In" button', () => {
    const { queryByLabelText, queryByRole } = render((
      <LoginContainer />
    ));

    expect(queryByLabelText('E-mail')).toBeInTheDocument();
    expect(queryByLabelText('Password')).toBeInTheDocument();

    expect(queryByRole('button', { name: 'Log In' })).toBeInTheDocument();
  });
});
