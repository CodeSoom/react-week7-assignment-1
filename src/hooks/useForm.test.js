import { renderHook, act } from '@testing-library/react-hooks';

import useForm from './useForm';

describe('useForm', () => {
  const handleSubmit = jest.fn();

  const renderUseForm = ({ initialValues }) => renderHook(() => useForm({
    initialValues,
    onSubmit: handleSubmit,
  }));

  beforeEach(() => {
    handleSubmit.mockClear();
  });

  context('when submit is called', () => {
    it('calls onSubmit', () => {
      const { result } = renderUseForm({});

      act(() => {
        result.current.submit();
      });

      expect(handleSubmit).toBeCalled();
    });
  });

  it('returns values from initialValues', () => {
    const initialValues = { a: 1, b: 2 };

    const { result } = renderUseForm({ initialValues });

    expect(result.current.values).toEqual(initialValues);
  });

  it('changeValues changes value', () => {
    const { result } = renderUseForm({ initialValues: { a: 1 } });

    act(() => {
      result.current.changeValues({ a: 2 });
    });

    expect(result.current.values.a).toBe(2);
  });
});
