import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM from 'react-dom'; // Correct import for ReactDOM
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Tugas8 from './Tugas/tugas8';
import Tugas7 from './Tugas/tugas7';
import Tugas10 from './Tugas/tugas10';
import Tugas9 from './Tugas/tugas9';
import TodoList from './Tugas/Todolist';
// import Edit from './Edit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <br />
    <Tugas7 />
    <br />
    <Tugas8 />
    <br />
    <Tugas9 />
    <br></br>
    <Tugas10 />
    <br></br>
    <TodoList/>
    {/* <Edit /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
