import React from 'react';

import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  it('render Login Title', () => {
    const { getByLabelText } = render((
      <LoginFormContainer />
    ));

    expect(getByLabelText('E-Mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
