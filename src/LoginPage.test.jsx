import React from 'react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test',
        Password: '1234',
      },
      accessToken: '',
    }));
  });

  it('render Login page', () => {
    const { container, getByLabelText } = render((
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    ));

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
    expect(container).toHaveTextContent('Log In');
  });
});
