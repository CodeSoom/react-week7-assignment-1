import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  it('renders input-controls', () => {
    const { queryByLabelText } = render(
      <LoginFormContainer />,
    );

    expect(queryByLabelText('E-mail')).not.toBeNull();
    expect(queryByLabelText('Password')).not.toBeNull();
  });

  it('renders "Log In" button', () => {
    const { queryByText, getByText } = render(
      <LoginFormContainer />,
    );

    expect(queryByText('Log In')).not.toBeNull();

    fireEvent.click(getByText('Log In'));

    expect(dispatch).isCalled();
  });
});
