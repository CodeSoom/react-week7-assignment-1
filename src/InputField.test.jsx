import React from 'react';

import { render } from '@testing-library/react';

import InputField from './InputField';

describe('InputField', () => {
  it('renders input fields', () => {
    const handleChange = jest.fn();

    const label = '평점';
    const type = 'number';
    const name = 'score';

    const { getByLabelText } = render((
      <InputField
        label={label}
        type={type}
        name={name}
        onChange={handleChange}
      />
    ));

    const attributes = [
      { attribute: 'type', value: type },
      { attribute: 'id', value: `input-${name}` },
      { attribute: 'name', value: name },
    ];

    attributes.forEach(({ attribute, value }) => {
      expect(getByLabelText(label)).toHaveAttribute(attribute, value);
    });
  });
});
