import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderLogoutForm = () => render((
    <LogoutForm
      onClick={handleClick}
    />
  ));

  it('renders “Log out” button', () => {
    const { container, getByText } = renderLogoutForm();

    expect(container).toHaveTextContent('Log out');

    fireEvent.click(getByText('Log out'));

    expect(handleClick).toBeCalled();
  });

  context('when button is not clicked', () => {
    it("doesn't click event handler", () => {
      renderLogoutForm();

      expect(handleClick).not.toBeCalled();
    });
  });

  context('when button is clicked', () => {
    it('calls click event handler', () => {
      const { getByText } = renderLogoutForm();

      fireEvent.click(getByText('Log out'));

      expect(handleClick).toBeCalled();
    });
  });
});
