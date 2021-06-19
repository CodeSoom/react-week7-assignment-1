import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';
import { changeLoginField } from '../redux/actions';

jest.mock('react-redux');
describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      loginFileds: { email: 'tester@example.com', password: 'test' },
      accessToken: '',
    }));
  });

  // todo : 렌더링 테스트, 리스닝 테스트 분리
  it('listen change events', () => {
    const { getByLabelText } = render(<LoginFormContainer />);

    expect(getByLabelText('E-mail').value).toBe('tester@example.com');

    fireEvent.change(getByLabelText('E-mail'), {
      target: { value: 'new email' },
    });

    expect(dispatch).toBeCalledWith(changeLoginField({
      name: 'email',
      value: 'new email',
    }));

    expect(getByLabelText('Password').value).toBe('test');
  });

  it('renders Log In Button', () => {
    const { getByText } = render(<LoginFormContainer />);
    fireEvent.click(getByText('Log In'));
    expect(dispatch).toBeCalled();
  });
});
