import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleOnChange = jest.fn();
  const handleOnSubmit = jest.fn();

  const renderComponent = () => render((
    <LoginForm onChange={handleOnChange} onSubmit={handleOnSubmit} />
  ));

  beforeEach(() => {
    handleOnChange.mockClear();
    handleOnSubmit.mockClear();
  });

  it('render Login Title', () => {
    const { getByLabelText } = renderComponent();

    expect(getByLabelText('E-Mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  context('when input email', () => {
    it('fires change event', () => {
      const { getByLabelText } = renderComponent();
      // When
      const emailInput = getByLabelText('E-Mail');
      fireEvent.change(emailInput, { target: { name: 'email', value: '이메일' } });
      // Then
      expect(handleOnChange).toBeCalledTimes(1);
    });
  });

  context('when input password', () => {
    it('fires change event', () => {
      const { getByLabelText } = renderComponent();
      // When
      const passwordInput = getByLabelText('Password');
      fireEvent.change(passwordInput, { target: { name: 'password', value: '비밀번호' } });
      // Then
      expect(handleOnChange).toBeCalledTimes(1);
    });
  });

  context('when click submit-button', () => {
    it('fires submit event', () => {
      const { getByRole } = renderComponent();
      // When
      const submitButton = getByRole('button', { name: 'Submit' });
      fireEvent.submit(submitButton);
      // Then
      expect(handleOnSubmit).toBeCalledTimes(1);
    });
  });
});
