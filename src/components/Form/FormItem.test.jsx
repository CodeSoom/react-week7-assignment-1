import { fireEvent, render } from '@testing-library/react';

import FormContext from './FormContext';
import FormItem from './FormItem';
import Input from '../Input';

describe('FormItem', () => {
  context('in the FormContext', () => {
    const handleChange = jest.fn();

    const renderFormItem = ({ label, name }) => render(
      <FormContext.Provider value={{ form: { values: {}, changeValues: handleChange } }}>
        <FormItem label={label} name={name}>
          <Input />
        </FormItem>
      </FormContext.Provider>,
    );

    it('renders label, name and children', () => {
      const { getByLabelText } = renderFormItem({ label: 'Email', name: 'email' });

      expect(getByLabelText('Email')).toBeInTheDocument();
      expect(getByLabelText('Email')).toHaveAttribute('name', 'email');
    });

    it('calls onChange when item changed', () => {
      const { getByLabelText } = renderFormItem({ label: 'Email', name: 'email' });

      fireEvent.change(getByLabelText('Email'), { target: { value: 'test@email.com' } });

      expect(handleChange).toBeCalledWith({ email: 'test@email.com' });
    });
  });
});
