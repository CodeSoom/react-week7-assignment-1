import { fireEvent, render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  const renderTextField = ({ label, name }) => render((
    <TextField
      label={label}
      name={name}
      onChange={handleChange}
    />
  ));

  it('renders label', () => {
    const { queryByLabelText } = renderTextField({ label: 'E-mail', name: 'email' });

    expect(queryByLabelText('E-mail').value).toBe('test@example.com');
  });

  it('listens change event', () => {
    const label = 'E-mail';
    const name = 'email';
    const value = 'test@email.com';

    const { getByLabelText } = renderTextField({ label, name });

    const input = getByLabelText(label);

    fireEvent.change(input, { target: { value } });

    expect(handleChange).toBeCalledWith({
      name,
      value,
    });
  });
});
