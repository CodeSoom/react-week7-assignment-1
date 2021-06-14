import { fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { setForm } from './actions';
import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockReturnValue(dispatch);
  });

  it('updates state with input control', () => {
    const { getByRole } = render(<LoginFormContainer />);

    const controls = [
      { name: 'email', value: 'testing@test.com' },
      { name: 'password', value: 'test' },
    ];

    controls.forEach(({ name, value }) => {
      const input = getByRole('textbox', { name });
      fireEvent.change(input, { target: { value } });

      expect(dispatch).toBeCalledWith(setForm({ name, value }));
    });
  });
});
