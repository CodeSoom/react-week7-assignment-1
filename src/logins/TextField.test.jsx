import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const handleChange = jest.fn();

  beforeEach(() => {
    handleChange.mockClear();
  });

  context('with type', () => {
    function renderTextField(type) {
      return render((
        <TextField
          label="E-mail"
          name="email"
          value="test@test"
          type={type}
          onChange={handleChange}
        />
      ));
    }

    it('renders label and input control', () => {
      const { getByLabelText } = renderTextField();

      expect(getByLabelText('E-mail')).not.toBeNull();
    });

    it('renders "text" input control', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="text"');
    });

    it('listens change event', () => {
      const { getByLabelText } = renderTextField();

      const text = getByLabelText('E-mail');

      fireEvent.change(text, { target: { value: 'test@test.com' } });

      expect(handleChange).toBeCalled();
    });
  });

  context('without type', () => {
    function renderTextField(type) {
      return render((
        <TextField
          label="E-mail"
          name="email"
          value="test@test"
          type={type}
          onChange={handleChange}
        />
      ));
    }

    it('renders "text" input control', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="text"');
    });
  });
});
