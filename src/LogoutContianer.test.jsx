import { fireEvent, render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import LogoutContainer from './LogoutContainer';

jest.mock('react-redux');

describe('LogoutView', () => {
  const dispatch = jest.fn();

  function renderLogoutContainer() {
    return render(<LogoutContainer />);
  }

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('render', () => {
    const { getByRole } = renderLogoutContainer();

    expect(getByRole('button', { name: '로그아웃' })).not.toBeNull();
  });

  it('when click logout button, dispatch called', () => {
    const { getByRole } = renderLogoutContainer();

    fireEvent.click(getByRole('button', { name: '로그아웃' }));

    expect(dispatch).toBeCalled();
  });
});
