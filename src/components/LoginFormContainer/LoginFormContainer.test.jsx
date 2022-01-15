import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

test('LoginFormContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    loginForm: {
      id: '',
      pw: '',
    },
  }));

  const { getByText } = render((<LoginFormContainer />));

  fireEvent.click(getByText('로그인'));

  expect(dispatch).toBeCalled();
});
