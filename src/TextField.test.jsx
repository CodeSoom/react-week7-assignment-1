import { fireEvent, render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  context('with type', () => {
    const handleChange = jest.fn();

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

    it('renders label and input control ', () => {
      const { queryByLabelText } = renderTextField();

      expect(queryByLabelText('평점')).not.toBeNull();
    });

    it('renders "number" input control ', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="number"');
    });

    it('listens input change event ', () => {
      const { getByLabelText } = renderTextField();

      const name = 'score';
      const value = '5';
      fireEvent.change(getByLabelText('평점'), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });

  context('without type', () => {
    const handleChange = jest.fn();

    function renderTextField() {
      return render((
        <TextField
          label="리뷰 내용"
          name="description"
          onChange={handleChange}
        />
      ));
    }

    it('renders label and input control ', () => {
      const { queryByLabelText } = renderTextField();

      expect(queryByLabelText('리뷰 내용')).not.toBeNull();
    });

    it('renders "text" input control ', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="text"');
    });

    it('listens input change event ', () => {
      const { getByLabelText } = renderTextField();

      const name = 'description';
      const value = '맛있어요';
      fireEvent.change(getByLabelText('리뷰 내용'), { target: { value } });

      expect(handleChange).toBeCalledWith({ name, value });
    });
  });
});
