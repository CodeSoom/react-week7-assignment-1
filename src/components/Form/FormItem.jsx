import { useContext, useMemo } from 'react';
import FormItemContext from '../../pages/LoginPage/FormItemContext';

import FormContext from './FormContext';

export default function FormItem({ label, name, children }) {
  const { form } = useContext(FormContext);

  const value = form.values[name];

  const onChange = (newValue) => {
    form.changeValues({ [name]: newValue });
  };

  const content = useMemo(() => (
    <FormItemContext.Provider value={{ value, name, onChange }}>
      <div>
        <label htmlFor={name}>{label}</label>
        {children}
      </div>
    </FormItemContext.Provider>
  ), [value, label, name]);

  return (
    <>
      {content}
    </>
  );
}
