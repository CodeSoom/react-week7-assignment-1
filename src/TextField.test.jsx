import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  const renderTextField = () => render(
    <TextField
      onChange={handleChange}
    />,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders label', () => {
    const label = 'E-mail';

    const { queryByLabelText } = renderTextField();

    expect(queryByLabelText(label)).not.toBeNull();
  });

  // it('show values', () => {
  //   const fields = {
  //     email: 'origin@example.com',
  //     password: 'origin',
  //   };

  //   const { getByLabelText } = renderTextField(fields);

  //   inputControls.forEach(({ label, name }) => {
  //     expect(getByLabelText(label)).toHaveValue(fields[name]);
  //   });
  // });

  // it('listen change events', () => {
  //   const { getByLabelText } = renderTextField();

  //   inputControls.forEach(({ label, name, value }) => {
  //     fireEvent.change(getByLabelText(label), {
  //       target: { value },
  //     });

  //     expect(handleChange).toBeCalledWith({ name, value });
  //   });
  // });
});
