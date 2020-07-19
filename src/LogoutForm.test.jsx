import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('renders "Log out" button', () => {
    const { getByText } = render(<LogoutForm />);

    expect(getByText('Log out')).toBeInTheDocument();
  });

  it('listens click event', () => {
    const handleClick = jest.fn();

    const { getByText } = render((
      <LogoutForm onClick={handleClick} />
    ));

    fireEvent.click(getByText('Log out'));

    expect(handleClick).toBeCalled();
  });
});
