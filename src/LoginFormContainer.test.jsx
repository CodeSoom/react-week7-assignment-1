import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders email input field', () => {
    const { container } = render(<LoginFormContainer />);

    expect(container).toHaveTextContent('E-mail');
  });

  it('renders password input field', () => {
    const { container } = render(<LoginFormContainer />);

    expect(container).toHaveTextContent('Password');
  });

  it('renders login button', () => {
    const { getByText } = render(<LoginFormContainer />);

    fireEvent.click(getByText('Log in'));

    expect(dispatch).toBeCalled();
  });
});
