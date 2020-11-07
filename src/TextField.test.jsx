import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  function renderTextField({ label, type, name }) {
    return render((
      <TextField
        label={label}
        type={type}
        name={name}
        onChange={handleChange}
      />
    ));
  }

  context('without type', () => {
    it('renders label and input control', () => {
      const { container, getByLabelText } = renderTextField({ label: '리뷰 내용', name: 'description' });

      expect(getByLabelText('리뷰 내용')).not.toBeNull();
      expect(container).toContainHTML('type="text"');
    });
  });

  context('with type', () => {
    it('renders label and input control', () => {
      const { container, getByLabelText } = renderTextField({ label: '평점', type: 'number', name: 'score' });

      expect(getByLabelText('평점')).not.toBeNull();
      expect(container).toContainHTML('type="number"');
    });
  });

  it('listen change events', () => {
    const controls = [
      {
        label: '평점', type: 'number', name: 'score', value: '5',
      },
      {
        label: '리뷰 내용', name: 'description', value: '최고의 맛!',
      },
    ];

    controls.forEach(({ label, name, value }) => {
      const { getByLabelText } = renderTextField({ label, name, value });

      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });
});
