import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent, getByText } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';

jest.mock('react-redux');

describe('LoginFormContainer.test', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear(); 
    useDispatch.mockImplementation(() => dispatch);
    
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'emailData',
        password: 'passwordData',
      },
    }));
  });

  it('renders login button', () => {
    const { container, getByText } = render((
      <LoginFormContainer />
    ));
    
    expect(container).toHaveTextContent('로그인');

    fireEvent.click(getByText('로그인'));
    expect(dispatch).toBeCalledTimes(1);
  });

  it('renders loginFields data', () => {
    const { getByLabelText } = render((
      <LoginFormContainer />
    ));
    
    expect(getByLabelText('ID')).not.toBe('emailData');
    expect(getByLabelText('PW')).not.toBe('passwordData');
  });

  it('change login field', () => {
    const { getByLabelText } = render((
      <LoginFormContainer />
    ));
    
    fireEvent.change(getByLabelText('ID'), {
      target: { value: 'tester@example.com' },
    });
    
    expect(dispatch).toBeCalledWith({
      type: 'changeLoginFields',
      payload: {
        name:  'email',
        value: 'tester@example.com',
      },
    });
  });
});
