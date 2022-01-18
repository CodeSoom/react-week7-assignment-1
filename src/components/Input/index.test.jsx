import { fireEvent, render } from '@testing-library/react';

import Input from '.';
import FormItemContext from '../../pages/LoginPage/FormItemContext';

describe('Input', () => {
  context('in the FormItemContext', () => {
    const handleChange = jest.fn();

    const renderInput = ({ value, name, type }) => render(
      <FormItemContext.Provider value={{
        value,
        name,
        onChange: handleChange,
      }}
      >
        <Input type={type} />
      </FormItemContext.Provider>,
    );

    it('renders name, value and type', () => {
      const { getByRole } = renderInput({ value: 'test@email.com', name: 'email', type: 'text' });

      expect(getByRole('textbox')).toHaveValue('test@email.com');
      expect(getByRole('textbox')).toHaveAttribute('name', 'email');
      expect(getByRole('textbox')).toHaveAttribute('type', 'text');
    });

    it('calls onChange', () => {
      const { getByRole } = renderInput({ value: 'test@email.com', name: 'email' });

      fireEvent.change(getByRole('textbox'), { target: { value: 'new@email.com' } });

      expect(handleChange).toBeCalledWith('new@email.com');
    });
  });
});
