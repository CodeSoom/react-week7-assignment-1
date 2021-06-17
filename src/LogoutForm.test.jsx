import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  function renderLogoutForm() {
    return render(
      <LogoutForm onClick={handleClick} />,
    );
  }

  it('renders logout button', () => {
    const { container } = renderLogoutForm();

    expect(container).toHaveTextContent('Log out');
  });

  it('listens click event', () => {
    const { getByText } = renderLogoutForm();

    fireEvent.click(getByText('Log out'));

    expect(handleClick).toBeCalled();
  });
});
