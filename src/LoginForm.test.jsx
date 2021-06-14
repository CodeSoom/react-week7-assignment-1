import { fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { setEmail } from './actions';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('renders input controls', () => {
    const { getByRole } = render(<LoginForm />);

    expect(getByRole('textbox', { name: 'Email' })).toBeInTheDocument();
    expect(getByRole('textbox', { name: 'Password' })).toBeInTheDocument();
  });

  it('renders submit button', () => {
    const { getByRole } = render(<LoginForm />);

    expect(getByRole('button', { name: 'Log In' })).toBeInTheDocument();
  });

  it('updates state with input control', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    const { getByRole } = render(<LoginForm />);
    const emailInput = getByRole('textbox', { name: 'Email' });
    fireEvent.change(emailInput, { target: { value: 'testing@test.com' } });
    expect(dispatch).toBeCalledWith(setEmail('testing@test.com'));
  });
});
