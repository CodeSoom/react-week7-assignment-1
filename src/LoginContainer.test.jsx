import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import LoginContainer from './LoginContainer';

describe('LoginContainer', () => {
  const renderLoginContainer = () => render(<LoginContainer />);

  jest.mock('react-redux');

  const dispatch = jest.fn();

  it('render', () => {
    const { container } = renderLoginContainer();

    expect(container).toHaveTextContent('ID');
    expect(container).toHaveTextContent('Password');
  });
});
