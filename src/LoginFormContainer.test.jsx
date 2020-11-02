import React from 'react';

import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  it('renders labels of email and password', () => {
    const { getByLabelText } = render(<LoginFormContainer />);

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('password')).not.toBeNull();
  });
});
