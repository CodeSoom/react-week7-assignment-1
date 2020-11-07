import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  function renderTextField({ label, type = 'text', name }) {
    const handleChange = jest.fn();

    return render(
      <TextField
        label={label}
        type={type}
        name={name}
        onChange={handleChange}
      />,
    );
  }

  context('with type', () => {
    it('renders label', () => {
      const { queryByLabelText } = renderTextField({
        label: '평점', type: 'number', name: 'score',
      });

      expect(queryByLabelText('평점')).not.toBeNull();
    });

    it('renders "number" input control', () => {
      const { container } = renderTextField({ type: 'number' });

      expect(container).toContainHTML('type="number"');
    });
  });

  context('without type', () => {
    it('renders label', () => {
      const { queryByLabelText } = renderTextField({
        label: '리뷰 설명', name: 'description',
      });

      expect(queryByLabelText('리뷰 설명')).not.toBeNull();
    });

    it('renders "text" input control', () => {
      const { container } = renderTextField({});

      expect(container).toContainHTML('type="text"');
    });
  });

  it('listens change events', () => {
    const handleChange = jest.fn();

    const controls = [
      { label: '평점', name: 'score', value: '5' },
      { label: '리뷰 내용', name: 'description', value: 'GOOD' },
    ];

    controls.forEach(({ label, name, value }) => {
      const { getByLabelText } = render(
        <TextField
          label={label}
          name={name}
          onChange={handleChange}
        />,
      );

      fireEvent.change(getByLabelText(label), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });
});
