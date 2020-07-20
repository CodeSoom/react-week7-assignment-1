import React from 'react';

import { render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const onChange = jest.fn();
  beforeEach(() => {
    onChange.mockClear();
  });

  describe('ReviewForm', () => {
    context('with type', () => {
      function renderTextField({ inputValue } = {}) {
        const handleChange = jest.fn();
        return render((
          <TextField
            id="review-score"
            label="평점"
            type="number"
            name="score"
            inputValue={inputValue}
            onChange={handleChange}
          />
        ));
      }

      it('renders label and input control', () => {
        const inputValue = '4';
        const { queryByLabelText } = renderTextField({ inputValue });

        expect(queryByLabelText('평점').value).toBe('4');
      });

      it('renders "number" input control', () => {
        const { container } = renderTextField();

        expect(container).toContainHTML('type="number"');
      });
    });

    context('without type', () => {
      function renderTextField({ inputValue } = {}) {
        const handleChange = jest.fn();
        return render((
          <TextField
            id="review-description"
            label="리뷰 내용"
            name="description"
            inputValue={inputValue}
            onChange={handleChange}
          />
        ));
      }

      it('renders label and input control', () => {
        const inputValue = '';
        const { queryByLabelText } = renderTextField({ inputValue });

        expect(queryByLabelText('리뷰 내용')).not.toBeNull();
      });

      it('renders "text" input control', () => {
        const { container } = renderTextField();

        expect(container).toContainHTML('type="text"');
      });
    });
  });
});
