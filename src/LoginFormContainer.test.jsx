import { fireEvent, render } from '@testing-library/react';
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
        email: '',
        password: '',
      },
    }));
  });

  it('listens change event', () => {
    const { getByLabelText } = render((<LoginFormContainer />));

    fireEvent.change(getByLabelText('E-mail'), {
      target: {
        name: 'email',
        value: 'test@test.com',
      },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeLoginField',
      payload: {
        name: 'email',
        value: 'test@test.com',
      },
    });
  });

  it('listens click event', () => {
    const { getByRole } = render((<LoginFormContainer />));

    fireEvent.click(getByRole('button', { name: 'Log In' }));

    expect(dispatch).toBeCalled();
  });
});
