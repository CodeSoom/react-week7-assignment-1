import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleClickLogout = jest.fn();

  it('renders LogoutForm', () => {
    const { queryByText } = render(<LogoutForm onClick={handleClickLogout} />);

    expect(queryByText('로그아웃')).not.toBeNull();
  });

  context('when "로그아웃" button clicked', () => {
    it('occurs handleClickLogout', () => {
      const { getByText } = render(<LogoutForm onClick={handleClickLogout} />);

      fireEvent.click(getByText('로그아웃'));

      expect(handleClickLogout).toBeCalledTimes(1);
    });
  });
});
