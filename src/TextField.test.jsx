import { render } from 'react-dom';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  it('renders label and input control', () => {
    const { queryByLabelText } = render(<TextField
      label="평점"
      type="number"
      name="score"
      onChange={handleChange}
    />);

    expect(queryByLabelText('평점')).not.toBeNull();
  });
});
