import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('renders log out button', () => {
    const handleClick = jest.fn();

    const { getByText } = render((
      <LogoutForm
        onClick={handleClick}
      />
    ));

    fireEvent.click(getByText('Log out'));

    expect(handleClick).toBeCalled();
  });
});
