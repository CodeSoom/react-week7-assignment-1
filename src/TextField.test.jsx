import { render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  context('with type', () => {
    it('renders label and input control ', () => {
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
    it('renders label and input control ', () => {
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
});
