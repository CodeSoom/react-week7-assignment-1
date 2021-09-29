import { render, fireEvent } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer', () => {
  const dispatch = jest.fn();

  const handleChange = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  const renderLoginFormContainer = () => render(
    <LoginFormContainer
      onChange={handleChange}
    />,
  );

  it('renders login field', () => {
    const { getByLabelText } = renderLoginFormContainer();

    expect(getByLabelText('e-mail')).not.toBeNull();
    expect(getByLabelText('password')).not.toBeNull();
  });

  it('listens change events', () => {
    const { getByLabelText } = renderLoginFormContainer();

    fireEvent.change(getByLabelText('e-mail'), {
      target: { value: 'smileguy' },
    });
    expect(dispatch).toBeCalledTimes(1);

    fireEvent.change(getByLabelText('password'), {
      target: { value: '1234' },
    });
    expect(dispatch).toBeCalledTimes(2);
  });
});
