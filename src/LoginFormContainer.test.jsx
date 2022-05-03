import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

describe('LoginFormContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    loginField: {
      email: '',
      password: '',
    },
  }));

  const renderLoginFormContainer = () => render((
    <LoginFormContainer />
  ));

  it('renders login form', () => {
    const { queryByLabelText } = renderLoginFormContainer();

    expect(queryByLabelText('E-mail')).not.toBeNull();
    expect(queryByLabelText('Password')).not.toBeNull();
  });

  it('listens for change event', () => {
    const controls = [
      { label: 'E-mail', value: 'tester@example.com', name: 'email' },
      { label: 'Password', value: 'tester', name: 'password' },
    ];

    const { getByLabelText } = renderLoginFormContainer();

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(
        getByLabelText(label),
        { target: { value, name } },
      );

      expect(dispatch).toBeCalledWith({
        type: 'setLoginField',
        payload: { [name]: value },
      });
    });
  });

  it('renders "log in" button', () => {
    const { container } = renderLoginFormContainer();

    expect(container).toHaveTextContent('log in');
  });

  it('listens for click event on submit login', () => {
    const { getByText } = renderLoginFormContainer();

    fireEvent.click(getByText('log in'));

    expect(dispatch).toBeCalled();
  });
});
