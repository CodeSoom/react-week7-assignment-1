import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  function renderTextField(label, name, type = 'text') {
    return render((
      <TextField
        label={label}
        name={name}
        type={type}
        onChange={handleChange}
      />
    ));
  }
  context('with type', () => {
    it('renders input fields', () => {
      const label = '평점';
      const name = 'score';
      const type = 'number';
      const value = '5';

      const { container, getByLabelText } = renderTextField(label, name, type);

      expect(container).toHaveTextContent('평점');

      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  context('without type', () => {
    it('renders input fields', () => {
      const label = '리뷰내용';
      const name = 'description';
      const value = '굳뜨!';

      const { container, getByLabelText } = renderTextField(label, name);

      expect(container).toHaveTextContent(label);

      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });
});
