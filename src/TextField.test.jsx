import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  const renderTextField = () => render((
    <TextField
      name="score"
      label="평점"
      onChange={handleChange}
    />
  ));

  it('renders label and input control', () => {
    const { getByLabelText } = renderTextField();

    expect(getByLabelText('평점')).not.toBeNull();
  });

  it('listen change event', () => {
    const { getByLabelText } = renderTextField();

    fireEvent.change(getByLabelText('평점'), {
      target: { value: '5' },
    });

    expect(handleChange).toBeCalled();
  });
});
