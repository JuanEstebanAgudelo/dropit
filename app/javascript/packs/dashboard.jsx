import React from 'react';
import ReactDOM from 'react-dom';
import { ClientRouter } from './containers/client-router';




document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ClientRouter />,
    document.body.appendChild(document.createElement('div')),
  )
})