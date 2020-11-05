import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {},
      accessToken: null,
    }));
  });

  it('renders title', () => {
    const { container } = render(
      <LoginPage />,
    );

    expect(container).toHaveTextContent('Log In');
  });

  it('renders login-form', () => {
    const { queryByLabelText } = render(
      <LoginPage />,
    );

    expect(queryByLabelText('E-mail')).not.toBeNull();
  });
});
