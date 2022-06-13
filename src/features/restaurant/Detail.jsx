export default function Detail({ name, address, menuItems = [] }) {
  return (
    <>
      <h2>{name}</h2>
      <p>
        주소:
        {address}
      </p>
      <h2>메뉴</h2>
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.id}>{menu.name}</li>
        ))}
      </ul>
    </>
  );
}
