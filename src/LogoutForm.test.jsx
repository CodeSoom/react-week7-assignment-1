import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('renders log out button and listens click event', () => {
    const handleClick = jest.fn();

    const { getByText } = render(<LogoutForm onClick={handleClick} />);

    fireEvent.click(getByText('Log out'));

    expect(handleClick).toBeCalled();
  });
});
