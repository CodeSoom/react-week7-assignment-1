// 관심사: 리덕스 (상태변화 및 상태 불러오기)
import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders "Submit" button', () => {
    const { getByText } = render((
      <LoginFormContainer />
    ));

    expect(getByText('Submit')).toBeInTheDocument();
  });

  context('with onClick event', () => {
    it('calls dispatch to change state', () => {
      const { getByText } = render((
        <LoginFormContainer />
      ));

      fireEvent.click(getByText('Submit'));

      expect(dispatch).toBeCalled();
    });
  });

  it('renders "E-mail, Password" input', () => {
    const { getByLabelText } = render((
      <LoginFormContainer />
    ));

    expect(getByLabelText('E-mail')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
  });

  context('with onChange event', () => {
    it('calls dispatch to change state', () => {
      const { getByLabelText } = render((
        <LoginFormContainer />
      ));

      fireEvent.click(getByLabelText('E-mail'), {
        target: { value: 'test@mail' },
      });
      fireEvent.click(getByLabelText('Password'), {
        target: { value: '123' },
      });

      expect(dispatch).toBeCalled();
    });
  });
});
