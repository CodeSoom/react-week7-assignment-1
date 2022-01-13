import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    handleClick.mockClear();
  });

  it('renders input field with value', () => {
    const { getByDisplayValue } = render(
      <LoginForm onClick={handleClick} />,
    );

    expect(getByDisplayValue('test@test.com')).not.toBeNull();
    expect(getByDisplayValue('123456')).not.toBeNull();
  });

  it('renders login button to handle onClick', () => {
    const { getByRole } = render(
      <LoginForm onClick={handleClick} />,
    );

    expect(getByRole('button', { name: 'Log In' })).not.toBeNull();

    fireEvent.click(getByRole('button', { name: 'Log In' }));

    expect(handleClick).toBeCalled();
  });
});
