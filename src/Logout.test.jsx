import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Logout from './Logout';

describe('Logout', () => {
  const handleClick = jest.fn();

  function renderLogout() {
    return render(
      <Logout
        onClick={handleClick}
      />,
    );
  }

  it('renders logout', () => {
    const { getByText } = renderLogout();

    expect(getByText('Log out')).not.toBeNull();
  });

  context('when “Log out” click event', () => {
    it('listens click event', () => {
      const { getByText } = renderLogout();

      fireEvent.click(getByText('Log out'));

      expect(handleClick).toBeCalled();
    });
  });
});
