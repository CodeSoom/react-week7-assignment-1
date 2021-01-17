import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Input from './Input';

test('Input', () => {
  const handleChange = jest.fn();
  const { getByLabelText } = render((
    <Input
      name="email"
      value="test@ccc.com"
      type="email"
      id="login-email"
      onChange={handleChange}
    >
      E-mail
    </Input>
  ));

  expect(getByLabelText('E-mail')).not.toBeNull();

  fireEvent.change(getByLabelText('E-mail'), { target: { value: 'ddd' } });

  expect(handleChange).toBeCalled();
});
