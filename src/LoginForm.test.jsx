import { MemoryRouter } from 'react-router-dom';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('input control들을 렌더링한다.', () => {
    const { getByLabelText } = render((
      <MemoryRouter>
        <LoginFormContainer />
      </MemoryRouter>
    ));

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
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
