import React from 'react';
import ReactDOM from 'react-dom';
import Notes from './notes.jsx';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    ReactDOM.render(<Notes />, root);
});