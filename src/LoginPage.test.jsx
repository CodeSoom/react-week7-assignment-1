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
});
