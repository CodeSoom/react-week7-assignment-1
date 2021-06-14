import { fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { setForm } from './actions';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockReturnValue(dispatch);
  });

  it('renders input controls', () => {
    const { getByRole } = render(<LoginForm />);

    expect(getByRole('textbox', { name: 'email' })).toBeInTheDocument();
    expect(getByRole('textbox', { name: 'password' })).toBeInTheDocument();
  });

  it('renders submit button', () => {
    const { getByRole } = render(<LoginForm />);

    expect(getByRole('button', { name: 'Log In' })).toBeInTheDocument();
  });

  it('updates state with input control', () => {
    const { getByRole } = render(<LoginForm />);

    const controls = [
      { name: 'email', value: 'testing@test.com' },
    ];

    controls.forEach(({ name, value }) => {
      const input = getByRole('textbox', { name });
      fireEvent.change(input, { target: { value } });

      expect(dispatch).toBeCalledWith(setForm({ name, value }));
    });
  });
});
