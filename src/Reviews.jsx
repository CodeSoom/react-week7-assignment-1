export default function Reviews({ items }) {
  return (
    <ul>
      {items.map(({
        id, name, score, description,
      }) => (
        <li key={id}>
          {`${name} : ${score}점. ${description}`}
        </li>
      ))}
    </ul>
  );
}
