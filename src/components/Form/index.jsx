export default function Form({ onSubmit, children }) {
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
