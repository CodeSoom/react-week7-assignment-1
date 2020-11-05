import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import LoginPage from './LoginPage';

test('LoginPage', () => {
  render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>,
  );
});
