import React from 'react';
import { render } from '@testing-library/react';

import LoginContainer from './LoginContainer';

describe('LoginContainer', () => {
  it('renders email input', () => {
    const { queryByLabelText } = render(<LoginContainer />);

    expect(queryByLabelText('E-mail')).not.toBeNull();
  });

  it('renders password input', () => {
    const { queryByLabelText } = render(<LoginContainer />);

    expect(queryByLabelText('Password')).not.toBeNull();
  });
});
