import React from 'react';
import ReactDOM from 'react-dom/client';

// React Component Basic Rules
// function name starts with capital letter
// must return JSX (html) - only one parent element (cannot return adjacent elements). React.Fragment can be used or <> </>

// always close tag

// Javascript entry point - connects the index.js root to the public index.html entry point root
function App() {
    return (<h2>React Tutorial</h2>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);