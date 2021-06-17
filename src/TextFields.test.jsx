import { render } from '@testing-library/react';
import TextFields from './TextFields';

describe('TextField', () => {
  it('renders input controls', () => {
    const field = ['email', 'password'];
    const form = { email: 'email', password: 'password' };

    const { getAllByRole } = render((
      <TextFields
        fields={field}
        form={form}
        handleChange={jest.fn()}
      />
    ));

    expect(getAllByRole('textbox')).toHaveLength(field.length);
  });
});
