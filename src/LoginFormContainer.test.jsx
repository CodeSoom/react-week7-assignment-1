import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'old@test.com',
        password: '1234',
      },
    }));
  });

  it('renders inputs and button', () => {
    const { getByLabelText, getByRole } = render(<LoginFormContainer />);

    expect(getByLabelText('E-mail').value).toBe('old@test.com');
    expect(getByLabelText('Password').value).toBe('1234');
    expect(getByRole('button', { name: /Log In/ })).not.toBeNull();
  });

  it('listens change events', () => {
    const { getByLabelText } = render(<LoginFormContainer />);

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'new@test.com' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginField',
      payload: { name: 'email', value: 'new@test.com' },
    });

    fireEvent.change(getByLabelText('Password'), {
      target: { value: '4321' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginField',
      payload: { name: 'password', value: '4321' },
    });
  });
});
