import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const renderTextField = ({ label, value }) => render(
    <TextField
      label={label}
      value={value}
    />,
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders label', () => {
    const { queryByLabelText } = renderTextField({
      label: 'E-mail',
    });

    expect(queryByLabelText('E-mail')).not.toBeNull();
  });

  it('show value', () => {
    const { getByLabelText } = renderTextField({
      label: 'E-mail',
      value: 'tester@example.com',
    });

    expect(getByLabelText('E-mail')).toHaveValue('tester@example.com');
  });

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
