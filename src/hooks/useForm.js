import { useState } from 'react';

export default function useForm({ initialValues = {}, onSubmit }) {
  const [values, setValues] = useState(initialValues);

  const changeValues = (newValues) => {
    setValues((prevValues) => ({ ...prevValues, ...newValues }));
  };

  const submit = () => {
    onSubmit(values);
  };

  return {
    values,
    submit,
    changeValues,
  };
}
