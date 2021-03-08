import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import LoginPage from '../LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      userLoginInputs: { email: 'test@naver', password: 'te' },
    }));
  });

  it('제목을 그려준다.', () => {
    const { queryAllByText } = render(<LoginPage />);

    expect(queryAllByText('Log In')[0]).toBeInTheDocument();
    expect(queryAllByText('Log In')[0].tagName).toBe('H2');
  });
});
