import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NumberSelector from './Numberselector';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NumberSelector />
  </React.StrictMode>
);

reportWebVitals();
