// 관심사: 로그아웃 폼을 화면에 나타내기
import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleClick = jest.fn();

  const renderLogoutForm = () => render((
    <LogoutForm
      onClickLogout={handleClick}
    />
  ));

  it('renders "Submit" button to call onClick event', () => {
    const { getByText } = renderLogoutForm();

    expect(getByText('Log Out')).toBeInTheDocument();

    fireEvent.click(getByText('Log Out'));

    expect(handleClick).toBeCalled();
  });
});
