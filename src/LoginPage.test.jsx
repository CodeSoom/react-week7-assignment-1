import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useSelector.mockImplementation(() => ({
      loginField: {
        email: '',
        password: '',
      },
      authorizedToken: '',
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders inputs and submit button', () => {
    const { getByLabelText, getByRole } = render(<LoginPage />);

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
    expect(getByRole('button', { name: 'Log in' })).not.toBeNull();
  });
});
