import React from 'react';

const ErrorMessage = ({ message }) => (
  <div>
    <small style={{ color: 'red' }}>
      {message}
    </small>
  </div>
);

export default ErrorMessage;
