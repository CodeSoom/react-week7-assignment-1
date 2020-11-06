import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders Log In title', () => {
    const { container } = render(
      <LoginPage />,
    );
    expect(container).toHaveTextContent('Log In');
  });

  it('render input controls', () => {
    const { getByLabelText } = render(
      <LoginPage />,
    );

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
