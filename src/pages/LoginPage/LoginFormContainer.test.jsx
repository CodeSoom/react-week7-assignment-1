import { fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';

import useForm from '../../hooks/useForm';

import LoginFormContainer from './LoginFormContainer';

jest.mock('../../hooks/useForm');

describe('LoginFormContainer', () => {
  useForm.mockImplementation(() => ({ values: { email: 'test@email.com', password: 'pass' } }));
  const dispatch = jest.fn();
  const renderLoginFormContainer = () => render(<LoginFormContainer />);

  beforeEach(() => {
    dispatch.mockClear();
  });

  useDispatch.mockImplementation(() => dispatch);

  context('when clicks submit button', () => {
    it('calls dispatch', () => {
      const { container } = renderLoginFormContainer();

      fireEvent.click(container.querySelector('button[type="submit"]'));

      expect(dispatch).toBeCalled();
    });
  });
});
