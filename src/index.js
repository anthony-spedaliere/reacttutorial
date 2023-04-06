import React from 'react';
import ReactDOM from 'react-dom/client';

// React Component Basic Rules
// start with capital letter
// must return JSX (html)
// always close tag

// Javascript entry point - connects the index.js root to the public index.html entry point root
function Greeting() {
    return <h2>React Tutorial</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting />);