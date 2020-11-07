import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

jest.mock('react-redux');

describe('LoginForm', () => {
  const dispatch = jest.fn();
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    handleChange.mockClear();
    handleSubmit.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  })

  function renderLoginForm({ email, password }) {
    return render(
      <MemoryRouter>
        <LoginForm 
          fields={{ email, password }}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </MemoryRouter>
    )
  }

  it('renders input controls', () => {
    const email = 'tester@example.com';
    const password = 'test';

    const { getByLabelText } = renderLoginForm({ email, password });

    const controls = [
      { label: 'E-mail', value: email },
      { label: 'Password', value: password },
    ];

    controls.forEach(({ label, value }) => {
      const input = getByLabelText(label);
      expect(input.value).toBe(value);
    });
  });

  it('listens change events', () => {
    const { getByLabelText } = renderLoginForm({});

    const controls = [
      { label: 'E-mail', name: 'email', value: 'testers@example.com' },
      { label: 'Password', name: 'password', value: 'tests' },
    ];

    controls.forEach(({ label, value, name }) => {
      const input = getByLabelText(label);

      fireEvent.change(input, {
        target: { value, name },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  it('render "Log In" button', () => {
    const { getByText } = renderLoginForm({});
    
    fireEvent.click(getByText('Log In'));

    // requestLogin 을 좀더 정교하게 확인하기 위해 mock-store 로 코드 리펙토링 들어가자
    expect(handleSubmit).toBeCalled();
  })

});