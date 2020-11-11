import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  const renderTextField = ({ label, name, type = 'text' }) => render((
    <TextField
      label={label}
      name={name}
      type={type}
      onChange={handleChange}
    />
  ));

  context('without type', () => {
    it('renders label and input control', () => {
      const label = '평점';

      const { queryByLabelText, container } = renderTextField({ label, name: 'score' });

      expect(queryByLabelText(label)).not.toBeNull();
      expect(container).toContainHTML('type="text"');
    });
  });

  context('with type', () => {
    it('renders label and input control', () => {
      const label = '리뷰 내용';

      const { queryByLabelText, container } = renderTextField({
        label,
        name: 'description',
        type: 'number',
      });

      expect(queryByLabelText(label)).not.toBeNull();
      expect(container).toContainHTML('type="number"');
    });
  });

  it('listens change events', () => {
    const reviewInput = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: 'Good!' },
    ];

    reviewInput.forEach(({ label, name, value }) => {
      const { getByLabelText } = renderTextField({ label, name });

      fireEvent.change(getByLabelText(label), {
        target: { value },
      });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });
});
