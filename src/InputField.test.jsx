import { fireEvent, render } from '@testing-library/react';

import InputField from './InputField';

describe('InputField', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const onChange = jest.fn();

  const renderInputField = () => render((
    <InputField
      onChange={onChange}
      label="E-mail"
      name="email"
      type="email"
    />
  ));

  it('renders login form', () => {
    const { queryByLabelText } = renderInputField();

    expect(queryByLabelText('E-mail')).not.toBeNull();
  });

  it('listens for change events', () => {
    const controls = [
      { label: 'E-mail', name: 'email', value: 'tester@example.com' },
    ];

    const { getByLabelText } = renderInputField();

    controls.forEach(({ label, name, value }) => {
      fireEvent.change(
        getByLabelText(label),
        { target: { value } },
      );

      expect(onChange).toBeCalledWith({ name, value });
    });
  });
});
