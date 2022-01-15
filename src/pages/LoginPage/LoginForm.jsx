import { useMemo } from 'react';
import Form from '../../components/Form';

export default function LoginForm({ values, onChange, onSubmit }) {
  const handleSubmit = () => {
    onSubmit(values);
  };

  const handleChange = ({ target }) => {
    onChange({
      ...values,
      [target.name]: target.value,
    });
  };

  const emailFormItem = useMemo(() => (
    <div>
      <label htmlFor="email">E-mail</label>
      <input id="email" name="email" value={values.email} onChange={handleChange} />
    </div>
  ), [values.email]);

  const passwordFormItem = useMemo(() => (
    <div>
      <label htmlFor="password">Password</label>
      <input id="password" name="password" value={values.password} onChange={handleChange} />
    </div>
  ), [values.password]);

  return (
    <Form onSubmit={handleSubmit}>
      {emailFormItem}
      {passwordFormItem}
      <button type="submit">Log In</button>
    </Form>
  );
}
