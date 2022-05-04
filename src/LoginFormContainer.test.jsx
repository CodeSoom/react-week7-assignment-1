import { fireEvent, render } from '@testing-library/react';

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
        email: '',
        password: '',
      },
    }));
  });

  const renderLoginFormContainer = () => render(
    <LoginFormContainer />,
  );

  it('renders input controls', () => {
    const { getByText } = renderLoginFormContainer();

    expect(getByText('email').value).toBe('test@test');
    expect(getByText('password').value).toBe('1234');
  });

  it('renders login button', () => {
    const { getByText } = renderLoginFormContainer();

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled();
  });
});
