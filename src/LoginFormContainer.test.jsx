import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  const handleChange = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginField: {
        email: 'test@soom.com',
        password: '1234',
      },
    }));
  });

  const renderLoginFormContainer = () => render(
    <LoginFormContainer
      onChange={handleChange}
    />,
  );

  it('renders login field', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('e-mail').value).toBe('test@soom.com');
    expect(getByLabelText('password').value).toBe('1234');
  });

  it('listens change events', () => {
    const { getByLabelText } = renderLoginFormContainer();

    fireEvent.change(getByLabelText('e-mail'), {
      target: { value: 'smileguy@soom.com' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginField',
      payload: { name: 'email', value: 'smileguy@soom.com' },
    });

    fireEvent.change(getByLabelText('password'), {
      target: { value: 'new password' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginField',
      payload: { name: 'password', value: 'new password' },
    });
  });
});
