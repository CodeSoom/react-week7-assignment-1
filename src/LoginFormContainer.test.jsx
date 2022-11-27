import { render, screen, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

import loginControls from '../fixtures/loginControls';

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
      accessToken: given.accessToken,
    }));
  });

  const renderLoginFormContainer = () => render((<LoginFormContainer />));

  context('로그인하지 않았거나 로그아웃일 경우', () => {
    given('accessToken', () => '');

    it('로그인 input이 랜더링된다', () => {
      renderLoginFormContainer();

      expect(screen.getByLabelText('E-mail').value).toBe('test@test');
      expect(screen.getByLabelText('Password').value).toBe('1234');
    });

    it('로그인 input에 onChange가 호출된다', () => {
      renderLoginFormContainer();

      loginControls.forEach(({ label, name, value }) => {
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

      fireEvent.click(screen.getByText('Log In'));

      expect(dispatch).toBeCalled();
    });
  });
});
