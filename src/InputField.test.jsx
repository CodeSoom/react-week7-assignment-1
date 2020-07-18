import React from 'react';

import { render } from '@testing-library/react';

import InputField from './InputField';

describe('InputField', () => {
  it('renders input fields', () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render((
      <InputField
        label="평점"
        name="score"
        onChange={handleChange}
      />
    ));

    expect(getByLabelText('평점')).toBeInTheDocument();
  });
});
