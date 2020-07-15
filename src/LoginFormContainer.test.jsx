import React from 'react';

import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  it('renders input control', () => {
    const { getByText } = render(<LoginFormContainer />);

    expect(getByText('E-mail')).not.toBeNull();
    expect(getByText('Password')).not.toBeNull();
  });
});
