import React from 'react';

import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const { getByLabelText } = render((
    <Input
      name="email"
      value="test@ccc.com"
      type="email"
      id="login-email"
    >
      E-mail
    </Input>
  ));

  it('render label and input  ', () => {
    expect(getByLabelText('E-mail')).not.toBeNull();
  });
});
