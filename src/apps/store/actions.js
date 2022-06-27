export function setLoading(key, isLoading) {
  return {
    type: 'setLoading',
    payload: {
      key,
      isLoading,
      isError: false,
      errorMessage: '',
    },
  };
}

export function setError(key, errorMessage) {
  return {
    type: 'setError',
    payload: {
      key,
      isLoading: false,
      isError: true,
      errorMessage,
    },
  };
}
