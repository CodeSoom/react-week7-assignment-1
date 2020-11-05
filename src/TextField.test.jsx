import React from 'react';

import { render } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  context('without type', () => {
    function renderTextField() {
      return render(
        <TextField
          label="E-mail"
          name="email"
          value="test@test"
        />,
      );
    }

    it('renders label and input control', () => {
      const { getByLabelText } = renderTextField();

      expect(getByLabelText('E-mail')).not.toBeNull();
    });

    it('renders "text" input control', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="text"');
    });
  });

  context('with type', () => {
    function renderTextField() {
      return render(
        <TextField
          label="E-mail"
          name="email"
          value="test@test"
          type="number"
        />,
      );
    }

    it('renders label and input control', () => {
      const { getByLabelText } = renderTextField();

      expect(getByLabelText('E-mail')).not.toBeNull();
    });

    it('renders "number" input control', () => {
      const { container } = renderTextField();

      expect(container).toContainHTML('type="number"');
    });
  });
});
