import { useState } from 'react';

export default function useForm({ initialValues, onSubmit }) {
  const [values, setValues] = useState(initialValues);

  const changeValues = (newValues) => {
    setValues({ ...values, ...newValues });
  };

  return {
    values,
    submit: onSubmit,
    changeValues,
  };
}
