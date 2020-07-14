import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

test('LoginPage', () => {

 render((
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>
 ));
});
