import { MemoryRouter } from 'react-router-dom';

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
        email: 'test@test',
        password: '1234',
      },
    }));
  });

  it('input control들을 렌더링한다.', () => {
    const { getByLabelText } = render((
      <MemoryRouter>
        <LoginFormContainer />
      </MemoryRouter>
    ));

    expect(getByLabelText('E-mail').value).toBe('test@test');

    fireEvent.change(getByLabelText('E-mail'), {
      target: {
        value: 'new email',
      },
    });

    expect(dispatch).toBeCalled();

    expect(getByLabelText('Password').value).toBe('1234');
  });

  it('"Login" 버튼을 렌더링한다.', () => {
    const { getByText } = render((
      <MemoryRouter>
        <LoginFormContainer />
      </MemoryRouter>
    ));

    fireEvent.click(getByText('Login'));
    expect(dispatch).toBeCalled();
  });
});
