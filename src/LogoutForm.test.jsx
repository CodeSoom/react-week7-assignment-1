import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Log out 버튼이 출력됩니다.', () => {
    const { container } = render(<LogoutForm onClick={handleClick} />);

    expect(container).toHaveTextContent('Log out');
  });

  it('click 이벤트가 발생되면, handleClick이 호출됩니다.', () => {
    const { getByText } = render(<LogoutForm onClick={handleClick} />);

    fireEvent.click(getByText('Log out'));

    expect(handleClick).toBeCalled();
  });
});
