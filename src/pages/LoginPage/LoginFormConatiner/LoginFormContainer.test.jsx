import { fireEvent, render } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  const renderLoginFormContainer = () => render((
    <LoginFormContainer
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders inputs', () => {
    const { getByLabelText } = renderLoginFormContainer();

    const labels = ['E-mail', 'Password'];

    labels.forEach((label) => {
      expect(getByLabelText(label)).toBeInTheDocument();
    });
  });

  it('listens change events', () => {
    const { getByLabelText } = renderLoginFormContainer();

    const inputs = [
      { label: 'E-mail', name: 'email', value: 'abc@test.com' },
      { label: 'Password', name: 'password', value: 'password123' },
    ];

    inputs.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('renders login button', () => {
    const { getByRole } = renderLoginFormContainer();

    expect(getByRole('button', { name: 'Log In' })).toBeInTheDocument();
  });

  it('listens submit event', () => {
    const { getByRole } = renderLoginFormContainer();

    fireEvent.click(getByRole('button', { name: 'Log In' }));

    expect(handleSubmit).toBeCalled();
  });
});
