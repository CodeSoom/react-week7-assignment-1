import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
      </ul>
    </div>
  );
}
