import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const handleChange = jest.fn();
  beforeEach(() => {
    handleChange.mockClear();
  });

  it('render input controls', () => {
    const { getByLabelText } = render((
      <LoginForm />
    ));

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });

  context('when change input text', () => {
    it('should call handleChange', () => {
      const { getByLabelText } = render((
        <LoginForm onChange={handleChange} />
      ));

      const controls = [
        { label: 'E-mail', value: 'test@exam' },
        { label: 'Password', value: '1234' },
      ];

      controls.forEach(({ label, value }) => {
        const input = getByLabelText(label);
        fireEvent.change(input, { target: { value } });
        expect(handleChange).toBeCalled();
        handleChange.mockClear();
      });
    });
  });
});
