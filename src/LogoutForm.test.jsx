import React from 'react';

import { render, fireEvent, screen } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  const renderLogoutForm = () => (render((
    <LogoutForm
      onClick={handleClick}
    />
  )));

  it('"Log out"버튼을 랜더링한다', () => {
    const { container } = renderLogoutForm();

    expect(container).toHaveTextContent('Log out');
  });

  it('"Log out"버튼을 클릭하면 handleClick을 호출한다', () => {
    const { container } = renderLogoutForm();

    expect(container).toHaveTextContent('Log out');

    fireEvent.click(screen.getByText('Log out'));

    expect(handleClick).toBeCalled();
  });
});
