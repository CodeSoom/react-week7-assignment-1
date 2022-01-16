import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  const dispatch = jest.fn();

  const renderLoginPage = () => (
    render(<LoginPage />)
  );

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      accessToken: '',
    }));
  });

  it('로그인 텍스트를 보여준다.', () => {
    const { container } = renderLoginPage();

    expect(container).toHaveTextContent('로그인');
  });
});
