import { useContext } from 'react';

import FormItemContext from '../../pages/LoginPage/FormItemContext';

export default function Input({ type = 'text' }) {
  const { value, name, onChange } = useContext(FormItemContext);

  const handleChange = ({ target: { value: newValue } }) => {
    onChange(newValue);
  };

  return (
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
    />
  );
}
