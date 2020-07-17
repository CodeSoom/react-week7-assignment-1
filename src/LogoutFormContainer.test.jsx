import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LogoutFormContainer from './LogoutFormContainer';

jest.mock('react-redux');

describe('LogoutFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'testEmail@email.com',
      },
    }));
  });

  it('renders LogoutFormContainer', () => {
    const { container } = render((
      <LogoutFormContainer />
    ));

    expect(container).toHaveTextContent('testEmail@email.com');
    expect(container).toHaveTextContent('환영합니다');
    expect(container).toHaveTextContent('로그아웃');
  });

  it('click logout button', () => {
    const { getByText } = render((
      <LogoutFormContainer />
    ));

    fireEvent.click(getByText('로그아웃'));
    expect(dispatch).toBeCalledWith({
      type: 'setAccessToken',
      payload: {
        accessToken: '',
      },
    });
  });
});
