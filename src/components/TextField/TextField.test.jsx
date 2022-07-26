import { fireEvent, render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const label = 'E-mail';
  const type = 'text';
  const id = 'email';
  const name = 'email';
  const value = 'abc@test.com';
  const handleChange = jest.fn();

  const renderTextField = () => render((
    <TextField
      label={label}
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
    />
  ));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the label', () => {
    const { container } = renderTextField();

    expect(container).toHaveTextContent(label);
  });

  it('renders the value', () => {
    const { getByLabelText } = renderTextField();

    expect(getByLabelText(label)).toHaveValue(value);
  });

  it('has the type, id, name', () => {
    const { getByLabelText } = renderTextField();

    const input = getByLabelText(label);

    expect(input).toHaveAttribute('type', type);
    expect(input).toHaveAttribute('id', id);
    expect(input).toHaveAttribute('name', name);
  });

  it('listens change events', () => {
    const { getByLabelText } = renderTextField();

    fireEvent.change(getByLabelText(label), { target: { value: 'test@test.com' } });

    expect(handleChange).toBeCalled();
  });
});
