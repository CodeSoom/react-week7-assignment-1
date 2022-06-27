export default function Categories({ categories, onClick, selectedCategory }) {
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(id)}
          >
            {name}
            {selectedCategory && id === selectedCategory.id && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}
