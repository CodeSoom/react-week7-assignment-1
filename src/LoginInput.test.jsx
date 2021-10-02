import { render, fireEvent } from '@testing-library/react';

import LoginInput from './LoginInput';

describe('LoginInput', () => {
  const handleChange = jest.fn();

  function renderLoginInput({
    label = 'e-mail', type = 'email',
  }) {
    return render((
      <LoginInput
        label={label}
        type={type}
        inputValue=""
        onChange={handleChange}
      />
    ));
  }

  it('renders inputs', () => {
    const controls = [
      { label: 'e-mail', type: 'email' },
      { label: 'password', type: 'password' },
    ];

    controls.forEach(({ label, type }) => {
      const { getByLabelText } = renderLoginInput({ label, type });

      const input = getByLabelText(label);

      expect(input.id).toBe(`input-${type}`);
      expect(input.type).toBe(type);
    });
  });

  it('listens change events', () => {
    const { getByLabelText } = renderLoginInput({});

    const input = getByLabelText('e-mail');

    fireEvent.change(input, { target: { value: 'test@test' } });

    expect(handleChange).toBeCalledWith({ name: 'email', value: 'test@test' });
  });
});
