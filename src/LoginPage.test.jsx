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
      accessToken: '',
    }));
  });

  context('login', () => {
    it('renders name and address', () => {
      const { accessToken } = 'aaaa';
      const { container } = render((
        <LoginPage />
      ));

      //expect(container).toHaveTextContent('로그인 성공');
    });
  });

  context('logout', () => {
    it('renders name and address', () => {
      const { accessToken } = '';
      const { container } = render((
        <LoginPage />
      ));

      expect(container).toHaveTextContent('ID');
      expect(container).toHaveTextContent('PW');
      expect(container).toHaveTextContent('로그인');
    });
  });
});
