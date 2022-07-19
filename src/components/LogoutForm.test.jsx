import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleClick = jest.fn();

  it('renders "Log out" button', () => {
    const { container } = render(<LogoutForm />);

    expect(container).toHaveTextContent('Log out');
  });

  it('listens click event', () => {
    const { getByText } = render(<LogoutForm onClick={handleClick} />);

    fireEvent.click(getByText('Log out'));

    expect(handleClick).toBeCalled();
  });
});
