import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NumberSelector from './Numberselector';
import reportWebVitals from './reportWebVitals';
import VibrationComponent from './vibration';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NumberSelector />
    <VibrationComponent />
  </React.StrictMode>
);

reportWebVitals();
