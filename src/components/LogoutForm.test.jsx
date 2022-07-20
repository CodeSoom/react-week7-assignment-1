import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderLogoutForm() {
    return render((
      <LogoutForm onClick={handleClick} />
    ));
  }

  it('renders "Log out" button', () => {
    const { container } = renderLogoutForm();

    expect(container).toHaveTextContent('Log out');
  });

  it('listens click event', () => {
    const { getByText } = renderLogoutForm();

    fireEvent.click(getByText('Log out'));

    expect(handleClick).toBeCalled();
  });
});
