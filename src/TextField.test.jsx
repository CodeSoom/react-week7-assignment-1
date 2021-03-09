import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  context('without type', () => {
    function renderTextField() {
      const handleChange = jest.fn();
      
      return render(
        <TextField restaura
          label="리뷰 내용"
          name="description"
          onChange={handleChange}
        />
      );
    }
    it('renders label and input control', () => {
      const handleChange = jest.fn();

      const { container , queryByLabelText } = renderTextField();

      expect(queryByLabelText('리뷰 내용')).not.toBeNull();
      expect(container).toContainHTML('type="text"');
    });
  });

  context('with type', () => {
    function renderTextField() {
      const handleChange = jest.fn();
      
      return render(
        <TextField restaura
          label="평점"
          type="number"
          name="score"
          onChange={handleChange}
        />
      );
    }
    it('renders label and input control', () => {
      const { container, queryByLabelText } = renderTextField();
  
      expect(queryByLabelText('평점')).not.toBeNull();
      expect(container).toContainHTML('type="number"');
    });
  });
  

  it('listens change events', () => {
    const name = 'score';
    const value = '5';
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <TextField restaura
          label="평점"
          name={name}
          onChange={handleChange}
        />
    );

    fireEvent.change(getByLabelText('평점'), {
      target: { value },
    });

    expect(handleChange).toBeCalledWith({ name, value });
  });
});
