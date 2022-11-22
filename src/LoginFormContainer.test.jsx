import { render, screen, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test',
        password: '1234',
      },
    }));
  });

  const renderLoginFormContainer = () => render((<LoginFormContainer />));

  it('로그인 input이 랜더링된다', () => {
    renderLoginFormContainer();

    expect(screen.getByLabelText('E-mail').value).toBe('test@test');
    expect(screen.getByLabelText('Password').value).toBe('1234');
  });

  it('로그인 input에 onChange 이벤트가 호출된다', () => {
    renderLoginFormContainer();

    const controls = [
      { label: 'E-mail', name: 'email', value: 'new E-mail' },
      { label: 'Password', name: 'password', value: 'new Password' },
    ];

    controls.forEach(({ label, name, value }) => {
      const input = screen.getByLabelText(label);

      fireEvent.change(input, { target: { value } });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: { name, value },
      });
    });
  });

  it('로그인 버튼이 랜더링된다', () => {
    renderLoginFormContainer();

    fireEvent.click(screen.getByText('Log in'));

    expect(dispatch).toBeCalled();
  });
});
