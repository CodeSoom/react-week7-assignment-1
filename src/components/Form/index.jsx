import FormContext from './FormContext';

export default function Form({ form, onSubmit, children }) {
  if (!form) {
    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        onSubmit(event);
      }}
      >
        {children}
      </form>
    );
  }

  return (
    <FormContext.Provider value={{ form, onSubmit }}>
      <form onSubmit={(event) => {
        event.preventDefault();
        onSubmit(event);
      }}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
}
