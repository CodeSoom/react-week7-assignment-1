import { render } from '@testing-library/react';
import TextField from './TextField';

describe('TextField', () => {
  it('renders input controls', () => {
    const field = ['email', 'password'];
    const form = { email: 'email', password: 'password' };

    const { getAllByRole } = render((
      <TextField
        fields={field}
        form={form}
        handleChange={jest.fn()}
      />
    ));

    expect(getAllByRole('textbox')).toHaveLength(field.length);
  });

  // Todo: more test?
});
