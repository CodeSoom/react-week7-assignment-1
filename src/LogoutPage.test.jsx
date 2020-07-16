import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LogoutPage from './LogoutPage';

describe('LogoutPage', () => {
  it('renders LogoutPage', () => {
    const { container, queryByRole } = render(<LogoutPage />);

    expect(container).toHaveTextContent('LogOut 페이지');

    expect(queryByRole('button', { name: 'LogOut' })).toBeInTheDocument();
  });

  // TODO : 로그아웃 버튼 클릭시, 메인화면으로 넘어가기
  it('click [LogOut] button ', () => {
    const { container, getByRole } = render(<LogoutPage />);

    fireEvent.click(getByRole('button', { name: 'LogOut' }));

    expect(container).toHaveTextContent('LogOut 되었습니다.'); // 임시
  });
});
