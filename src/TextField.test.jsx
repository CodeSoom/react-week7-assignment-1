import { render } from 'react-dom';

import TextField from './TextField';

describe('TextField', () => {
  context('with type', () => {
    it('renders label and input control', () => {
      const handleChange = jest.fn();

      const { queryByLabelText } = render(<TextField
        label="평점"
        type="number"
        name="score"
        onChange={handleChange}
      />);

      expect(queryByLabelText('평점')).not.toBeNull();
    });
  });

  context('without type', () => {
    it('renders label and input control', () => {
      const handleChange = jest.fn();

      const { queryByLabelText } = render(<TextField
        label="리뷰 내용"
        name="description"
        onChange={handleChange}
      />);

      expect(queryByLabelText('리뷰 내용')).not.toBeNull();
    });
  });
});
