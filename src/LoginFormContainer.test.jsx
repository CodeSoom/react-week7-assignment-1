import React from 'react';

import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  it('renders LoginFormContainer', () => {
    const { container } = render(<LoginFormContainer />);

    expect(container).toHaveTextContent('E-mail');
    expect(container).toHaveTextContent('Password');
    expect(container).toHaveTextContent('로그인');
  });
});
