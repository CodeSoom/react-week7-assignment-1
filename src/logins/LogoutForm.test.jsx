import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  it('renders Logout button and listens click event', () => {
    const handleClick = jest.fn();

    const { container, getByText } = render((
      <LogoutForm onClick={handleClick} />
    ));

    expect(container).toHaveTextContent('Log out');

    fireEvent.click(getByText('Log out'));

    expect(handleClick).toBeCalled();
  });
});
