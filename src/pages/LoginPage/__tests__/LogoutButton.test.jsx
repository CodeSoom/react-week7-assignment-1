import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LogoutButton from '../LogoutButton';

describe('LogoutButton', () => {
  const handleClick = jest.fn();

  beforeEach(() => handleClick.mockClear());

  it('Logout 버튼을 보여준다.', () => {
    const { queryByText } = render(<LogoutButton onClick={handleClick} />);

    expect(queryByText('Log out')).toBeInTheDocument();
  });

  it('Logout 버튼을 누르면 hnadleClick함수를 실행한다.', () => {
    const { queryByText } = render(<LogoutButton onClick={handleClick} />);

    fireEvent.click(queryByText('Log out'));

    expect(handleClick).toBeCalled();
  });
});
