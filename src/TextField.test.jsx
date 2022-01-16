import { fireEvent, render } from '@testing-library/react';
import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();
  const renderTextField = (type = 'text') => render((
    <TextField
      value=""
      onChange={handleChange}
      name="test"
      label="test"
      type={type}
    />
  ));

  beforeEach(() => {
    handleChange.mockClear();
  });

  it('renders', () => {
    context('without type', () => {
      const { container, getByLabelText } = renderTextField();

      expect(getByLabelText('test')).not.toBeNull();
      expect(container).toContainHTML('type="text"');
      expect(container).toContainHTML('id="input-test"');
    });

    context('with type', () => {
      const { container, getByLabelText } = renderTextField('password');

      expect(getByLabelText('test')).not.toBeNull();
      expect(container).toContainHTML('type="password"');
      expect(container).toContainHTML('id="input-test"');
    });
  });

  it('when input change, handleChange called', () => {
    const { getByLabelText } = renderTextField();

    const input = getByLabelText('test');

    fireEvent.change(input, { target: { value: 'test' } });
    expect(handleChange).toBeCalled();
  });
});
