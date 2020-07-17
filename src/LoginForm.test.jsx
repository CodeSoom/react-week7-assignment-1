import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  it('render input controls', () => {
    const { getByLabelText } = render((
      <LoginForm />
    ));

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  context('when change input text', () => {
    it('should call handleChange', () => {
      const handleChange = jest.fn();
      const { getByLabelText } = render((
        <LoginForm onChange={handleChange} />
      ));

      fireEvent.change(getByLabelText('E-mail'), {
        target: { value: 'test@exam' },
      });
      expect(handleChange).toBeCalled();
    });
  });
});
