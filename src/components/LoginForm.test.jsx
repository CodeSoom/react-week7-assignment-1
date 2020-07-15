import React from 'react';

import { render } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('render Login Title', () => {
    const { getByLabelText } = render((
      <LoginForm />
    ));

    expect(getByLabelText('E-Mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
