import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('renders "Logout" Button', () => {
    const handleClick = jest.fn();

    const { container } = render((
      <LogoutForm onClick={handleClick} />
    ));

    expect(container).toHaveTextContent('Logout');
  });

  it('listens "Logout" Button click event', () => {
    const handleClick = jest.fn();

    const { getByText } = render((
      <LogoutForm onClick={handleClick} />
    ));

    fireEvent.click(getByText('Logout'));

    expect(handleClick).toBeCalled();
  });
});
