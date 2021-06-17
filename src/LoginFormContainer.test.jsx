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

    const controls = [
      { label: 'E-mail', name: 'email', value: 'test@test.com' },
      { label: 'Password', name: 'password', value: 'test' },
    ];

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(dispatch).toBeCalledWith({
        type: 'changeLoginField',
        payload: { name, value },
      });
    });
  });

  it('listens click event', () => {
    const { getByRole } = render((<LoginFormContainer />));

    fireEvent.click(getByRole('button', { name: 'Log In' }));

    expect(dispatch).toBeCalled();
  });
});
