import React from 'react';

import {MemoryRouter} from 'react-router-dom';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {

  function loginPageRender() {
    return render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    )
  }

  it('render log in title', () => {
    const { container, queryByText } = loginPageRender();
  
    expect(container).toHaveTextContent('Log In');
  })

  it('render input control', () => {
    const { getByLabelText } = loginPageRender();
  
    expect(getByLabelText('E-mail')).not.toBeNull();
  })
});