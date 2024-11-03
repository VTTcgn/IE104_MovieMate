import React from 'react';
import ReactDOM from 'react-dom'; // Chỉ import 'react-dom' thay vì 'react-dom/client'
import './index.css';  // CSS của bạn
import App from './App';  // Component chính

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Gắn vào thẻ có id="root" trong index.html
);
