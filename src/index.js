import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Tugas8 from './tugas8';
import Tugas7 from './tugas7';
import Tugas9 from './tugas9Dan10';
// import Edit from './Edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <br></br>
    <Tugas7/>
    <br></br>
    <Tugas8/>
    <br></br>
    <Tugas9/>
    {/* <Edit/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
