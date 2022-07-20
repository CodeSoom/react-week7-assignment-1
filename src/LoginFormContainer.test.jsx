import { fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  const renderLoginFormContainer = () => render(
    <LoginFormContainer />,
  );

  it('E-mail - input이 렌더링된다', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('E-mail')).toBeInTheDocument();
  });

  it('Password - input이 렌더링된다', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  it('login - button이 렌더링된다', () => {
    const { getByText } = renderLoginFormContainer();

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled();
  });
});
