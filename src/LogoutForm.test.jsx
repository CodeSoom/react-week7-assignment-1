import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('renders "Log out" button', () => {
    const { getByText } = render(<LogoutForm />);

    expect(getByText('Log out')).toBeInTheDocument();
  });

  it('listens click event', () => {
    const handleClickLogout = jest.fn();

    const { getByText } = render((
      <LogoutForm
        onClick={handleClickLogout}
      />
    ));

    fireEvent.click(getByText('Log out'));

    expect(handleClickLogout).toBeCalled();
  });
});
