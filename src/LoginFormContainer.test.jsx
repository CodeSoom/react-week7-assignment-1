import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    loginFields: {
      email: 'minsuk@naver.com',
      password: '123123',
    },
  }));

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

    expect(getByText('Log In')).toBeInTheDocument();
  });
});
