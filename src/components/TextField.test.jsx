import { fireEvent, render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const onChange = jest.fn();

  const rendersTextField = () => (render((
    <TextField
      id="id"
      label="label"
      name="name"
      value='value'
      onChange={onChange}
    />
  )));

  it('renders label and input', () => {
    const { getByRole } = rendersTextField();

    expect(getByRole('textbox', { name: 'label' })).not.toBeNull();

  });

  it('input calls onChage', () => {
    const { getByRole } = rendersTextField();

    fireEvent.change(getByRole('textbox', { name: 'label' }), {
      target: {
        value: 'test',
      },
    });

    expect(onChange).toBeCalled();
  });
});
