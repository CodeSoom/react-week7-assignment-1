import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  function renderLogoutForm() {
    return render((
      <LogoutForm
        onClick={handleClick}
      />
    ));
  }

  it('renders "Log out" button', () => {
    const { queryByRole } = renderLogoutForm();

    expect(queryByRole('button', { name: 'Log out' })).toBeInTheDocument();
  });

  it('clicks "Log out" button, calls onClick handler', () => {
    const { getByRole } = renderLogoutForm();

    fireEvent.click(getByRole('button', { name: 'Log out' }));

    expect(handleClick).toBeCalled();
  });
});
