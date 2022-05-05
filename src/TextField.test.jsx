import { render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  context('with type', () => {
    function renderTextField() {
      const handleChange = jest.fn();

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
  });

  context('without type', () => {
    function renderTextField() {
      const handleChange = jest.fn();

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
  });
});
