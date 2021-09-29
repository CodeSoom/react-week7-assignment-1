import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  context('with type', () => {
    it('renders label and input control', () => {
      const handleChange = jest.fn();

      const { container, queryByLabelText } = render((
        <TextField
          label="평점"
          type="number"
          name="score"
          onChange={handleChange}
        />
      ));

      expect(queryByLabelText('평점')).not.toBeNull();
      expect(container).toContainHTML('type="number"');
    });
  });

  context('without type', () => {
    it('renders label and input control', () => {
      const handleChange = jest.fn();

      const { container, queryByLabelText } = render((
        <TextField
          label="리뷰 내용"
          name="description"
          onChange={handleChange}
        />
      ));

      expect(queryByLabelText('리뷰 내용')).not.toBeNull();
      expect(container).toContainHTML('type="text"');
    });
  });

  it('listens change events', () => {
    const name = 'score';
    const value = '5';

    const handleChange = jest.fn();

    const { getByLabelText } = render((
      <TextField
        label="평점"
        name={name}
        onChange={handleChange}
      />
    ));

    fireEvent.change(getByLabelText('평점'), { target: { value } });

    expect(handleChange).toBeCalledWith({ name, value });
  });
});
