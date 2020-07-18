import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('renders "logout" button', () => {
    const { getByText } = render(<LogoutForm />);

    expect(getByText('logout')).toBeInTheDocument();
  });

  it('listens click event', () => {
    const handleClickLogout = jest.fn();

    const { getByText } = render((
      <LogoutForm
        onClick={handleClickLogout}
      />
    ));

    fireEvent.click(getByText('logout'));

    expect(handleClickLogout).toBeCalled();
  });
});
