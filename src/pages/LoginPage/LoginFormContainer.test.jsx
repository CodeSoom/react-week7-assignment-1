import { fireEvent, render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import useForm from '../../hooks/useForm';
import { postLogin } from '../../store/actions';

import LoginFormContainer from './LoginFormContainer';

jest.mock('../../hooks/useForm');
jest.mock('../../store/actions');

describe('LoginFormContainer', () => {
  useForm.mockImplementation(() => ({ values: { email: 'test@email.com', password: 'pass' } }));
  postLogin.mockImplementation(() => jest.fn());

  const dispatch = jest.fn();
  const renderLoginFormContainer = () => render(<LoginFormContainer />);

  beforeEach(() => {
    dispatch.mockClear();
  });

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({ accessToken: null }));

  context('when clicks submit button', () => {
    it('calls dispatch and postLogin with email and password', () => {
      const { container } = renderLoginFormContainer();

      fireEvent.click(container.querySelector('button[type="submit"]'));

      expect(dispatch).toBeCalled();
      expect(postLogin).toBeCalledWith({ email: 'test@email.com', password: 'pass' });
    });
  });
});
