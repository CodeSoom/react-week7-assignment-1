import React from 'react';

import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  it('renders input-controls', () => {
    const { queryByLabelText } = render(
      <LoginFormContainer />,
    );

    expect(queryByLabelText('E-mail')).not.toBeNull();
  });
});
