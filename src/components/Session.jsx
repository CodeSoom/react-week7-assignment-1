import React from 'react';

export default function Session({ accessToken }) {
  return (
    <p>{accessToken || 'no-access-token'}</p>
  );
}
