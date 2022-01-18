// eslint-disable-next-line no-unused-vars
import { useEffect } from 'react';

import Form from '../../components/Form';
import FormItem from '../../components/Form/FormItem';
import useForm from '../../hooks/useForm';
import Input from '../../components/Input';

/**
 * @export
 * @param {{
 *  initialValues?: { email: string; password: string };
 *  onChange?: (values: { email: string, password: string }) => void,
 *  onLogin?: (values: { email: string, password: string }) => void,
 * }} { onLogin }
 * @return {ReactElement} LoginForm
 */
export default function LoginForm({
  accessToken, initialValues = {}, onChange, onLogin, onLogout,
}) {
  const form = useForm({ initialValues: { email: initialValues.email || '', password: initialValues.password || '' } });

  const handleLogin = () => {
    onLogin?.({ email: form.values.email, password: form.values.password });
  };

  const handleLogout = () => {
    onLogout?.();
  };

  useEffect(() => {
    onChange?.(form.values);
  }, [form.values, onChange]);

  if (accessToken) {
    return (
      <button type="button" onClick={handleLogout}>Log out</button>
    );
  }

  return (
    <>
      <Form form={form} onSubmit={handleLogin}>
        <FormItem label="E-mail" name="email">
          <Input />
        </FormItem>
        <FormItem label="Password" name="password">
          <Input />
        </FormItem>
        <button type="submit">Log In</button>
      </Form>
    </>
  );
}
