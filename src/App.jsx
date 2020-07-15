import React from 'react';

import {
  Link,
} from 'react-router-dom';

import RoutePage from './RoutePage';

export default function App() {
  return (
    <div>
      <header>
        <h1>
          <Link to="/">헤더</Link>
        </h1>
      </header>
      <RoutePage />
    </div>
  );
}
