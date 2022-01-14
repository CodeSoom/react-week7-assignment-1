import { renderHook, act } from '@testing-library/react-hooks';

import useForm from './useForm';

describe('useForm', () => {
  it('', () => {
    const handleSubmit = jest.fn();
    const { result } = renderHook(() => useForm({ onSubmit: handleSubmit }));

    act(() => {
      result.current.submit();
    });

    expect(handleSubmit).toBeCalled();
  });
});
