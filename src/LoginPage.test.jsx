import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: '',
        password: '',
      },
    }));
  });

  it('renders LoginPage', () => {
    const { container, queryByText } = render(<LoginPage />);

    expect(container).toHaveTextContent('LogIn');
    expect(container).toHaveTextContent('E-mail');
    expect(container).toHaveTextContent('Password');
    expect(queryByText('로그인')).not.toBeNull();
  });
});
