import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test', password: '1234',
      },
    }));
  });

  const renderLoginPage = () => render(<LoginPage />);

  it('Log In 문구가 보입니다.', () => {
    const { container } = renderLoginPage();
    expect(container).toHaveTextContent('Log In');
  });
});
