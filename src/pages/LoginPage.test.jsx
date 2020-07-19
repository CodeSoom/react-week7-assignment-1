import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  useSelector.mockImplementation((selector) => selector({
    session: {
      accessToken: null,
    },
  }));

  it('render Login Title', () => {
    const { getByLabelText } = render((
      <LoginPage />
    ));

    expect(getByLabelText('E-Mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
