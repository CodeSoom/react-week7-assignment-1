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
 *  onSubmit?: (values: { email: string, password: string }) => void,
 * }} { onSubmit }
 * @return {ReactElement} LoginForm
 */
export default function LoginForm({ initialValues = {}, onChange, onSubmit }) {
  const form = useForm({ initialValues: { email: initialValues.email || '', password: initialValues.password || '' } });

  const handleSubmit = () => {
    onSubmit?.({ email: form.values.email, password: form.values.password });
  };

  useEffect(() => {
    onChange?.(form.values);
  }, [form.values, onChange]);

  return (
    <>
      <Form form={form} onSubmit={handleSubmit}>
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
