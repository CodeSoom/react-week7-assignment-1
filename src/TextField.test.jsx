import React from 'react';

import { render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  context('with type', () => {
    function renderTextField() {
      return render((
        <TextField
          label="평점"
          type="number"
          name="score"
          onChange={handleChange}
        />
      ));
    }

    it('renders label and input control', () => {
      const { queryByLabelText } = renderTextField();

      expect(queryByLabelText('평점')).not.toBeNull();
    });

    it('renders "number" input control', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="number"');
    });
  });

  context('without type', () => {
    function renderTextField() {
      return render((
        <TextField
          label="리뷰 내용"
          name="description"
          onChange={handleChange}
        />
      ));
    }

    it('renders label and input control', () => {
      const { queryByLabelText } = renderTextField();

      expect(queryByLabelText('리뷰 내용')).not.toBeNull();
    });

    it('renders "text" input control', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="text"');
    });
  });

  // it('listen change events', () => {
  //   const { getByLabelText } = render((
  //     <TextField onChange={handleChange} />
  //   ));

  //   const controls = [
  //     { label: '평점', name: 'score', value: '5' },
  //     { label: '리뷰 내용', name: 'description', value: '진짜진짜진짜진짜맛있는집이에요' },
  //   ];

  //   controls.forEach(({ label, name, value }) => {
  //     fireEvent.change(getByLabelText(label), { target: { value } });

  //     expect(handleChange).toBeCalledWith({ name, value });
  //   });
  // });
});
