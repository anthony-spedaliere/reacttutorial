import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

// React Component Basic Rules
// function name starts with capital letter
// must return JSX (html) - only one parent element (cannot return adjacent elements). React.Fragment can be used or <> </>

// always close tag

// Javascript entry point - connects the index.js root to the public index.html entry point root
function BookList() {
    return (
        <section className='booklist'>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

const Book = () => {
    return (
        <article className='book'>
            <Image />
            <Title />
            <Author />
        </article>
    );
}

const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/810bsxh1MmL._AC_UL600_SR600,400_.jpg' />;
const Title = () => <h2>Title: How to Catch the Easter Bunny</h2>;
const Author = () => <h2>By: Adam Wallace (Author) and Andy Elkerton (Illustrator)</h2>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(< BookList />);