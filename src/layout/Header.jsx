import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();

  return pathname === '/' ? null : (
    <header>
      <h1>
        <Link to="/">헤더</Link>
      </h1>
    </header>
  );
}
