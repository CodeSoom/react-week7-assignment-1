import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const renderLoginFormContainer = () => render(
    <MemoryRouter>
      <LoginFormContainer />
    </MemoryRouter>,
  );

  it('renders input controls', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
