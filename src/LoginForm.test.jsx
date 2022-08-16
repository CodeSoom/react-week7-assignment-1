import { fireEvent, render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const dispatch = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    dispatch.mockClear();
  });

  const redersLoginForm = () => render(<LoginForm onSubmit={handleSubmit} />);

  it('renders login button', () => {
    const { queryByText } = redersLoginForm();

    fireEvent.click(queryByText('Login'));

    expect(handleSubmit).toBeCalled();
  });
});
