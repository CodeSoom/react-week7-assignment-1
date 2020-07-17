import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('render input controls', () => {
    const { getByLabelText } = render((
      <LoginForm />
    ));

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
