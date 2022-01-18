import Form from '../../components/Form';
import FormItem from '../../components/Form/FormItem';
import Input from '../../components/Input';
import useForm from '../../hooks/useForm';

export default function ReviewForm({ onSubmit }) {
  const form = useForm({ initialValues: { score: 3, description: '' } });

  const handleSubmit = () => {
    onSubmit({ score: form.values.score, description: form.values.description });
  };

  return (
    <Form form={form} onSubmit={handleSubmit}>
      <FormItem label="평점" name="score">
        <Input type="number" />
      </FormItem>
      <FormItem label="리뷰 내용" name="description">
        <Input />
      </FormItem>
      <button type="submit">리뷰 남기기</button>
    </Form>
  );
}
