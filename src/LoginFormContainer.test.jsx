import React from 'react';

import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

test('LoginPAge', () => {
  const { getByLabelText } = render(<LoginFormContainer />);

  expect(getByLabelText('E-mail')).not.toBeNull();
  expect(getByLabelText('Password')).not.toBeNull();
});
