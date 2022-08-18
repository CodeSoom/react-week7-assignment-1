import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      userfields: {
        email: 'test@email.com',
        password: 'test',
      },
    }));

    dispatch.mockClear();
  });

  const rendersLoginFormContainer = () => render(<LoginFormContainer />);

  // 로그인 버튼 클릭 시 dispatch가 불려야 한다.
  it('renders login button', () => {
    const { queryByText } = rendersLoginFormContainer();

    fireEvent.click(queryByText('Login'));

    expect(dispatch).toBeCalled();
  });

  // 로그인 버튼 클릭 시 dispatch가 불려야 한다.
  it('renders login button', () => {
    const { getByLabelText } = rendersLoginFormContainer();

    // getByLabelText("E-mail") : "E-mail"이라는 레이블을 가진 input을 찾는다
    expect(getByLabelText('E-mail').value).toBe('test@email.com');
    expect(getByLabelText('Password').value).toBe('test');
  });
});
