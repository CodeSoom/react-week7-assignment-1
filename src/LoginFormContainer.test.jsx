// 관심사: 리덕스 (상태변화 및 상태 불러오기)
import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

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
});
