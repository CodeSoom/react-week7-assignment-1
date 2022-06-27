import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import Home from './Home';

test('Home', () => {
  render((
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  ));
});
