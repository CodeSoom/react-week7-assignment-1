import { render, fireEvent } from '@testing-library/react';

import LogoutForm from './LogoutForm';

describe('LogoutForm', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  it('renders input field to handle onChange', () => {
    const { getByRole } = render(
      <LogoutForm
        onClick={handleClick}
      />,
    );

    expect(getByRole('button', { name: 'Log out' })).not.toBeNull();

    fireEvent.click(getByRole('button', { name: 'Log out' }));

    expect(handleClick).toBeCalledTimes(1);
  });
});
