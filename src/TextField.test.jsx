import { fireEvent, render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  const label = 'E-mail';
  const type = 'email';
  const name = 'email';
  const value = 'test@email.com';

  const renderTextField = () => render((
    <TextField
      label={label}
      type={type}
      name={name}
      onChange={handleChange}
    />
  ));

  it('renders label', () => {
    const { queryByLabelText } = renderTextField();

    expect(queryByLabelText('E-mail')).not.toBeNull();
  });

  it('listens change event', () => {
    const { getByLabelText } = renderTextField();

    const input = getByLabelText(label);

    fireEvent.change(input, { target: { value } });

    expect(handleChange).toBeCalledWith({
      name,
      value,
    });
  });
});
