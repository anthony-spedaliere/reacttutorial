import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import Book from './Book';

// resources
import {books} from './books.js';

// styling
import './index.css';

// React Component Basic Rules
// function name starts with capital letter
// must return JSX (html) - only one parent element (cannot return adjacent elements). React.Fragment can be used or <> </>
// always close tag

// Javascript entry point - connects the index.js root to the public index.html entry point root
function BookList() {

    const getBook = (bookId) => {
        const book = books.find((book) => book.id === bookId);
        console.log(book);
    }

    return (
        <>
            <h1>Amazon Best Sellers</h1>
            <section className='booklist'>                          
                {books.map((book, index) => {                
                    return <Book {...book} getBook = {getBook} index={index} key={book.id}/>
                })}
            </section>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(< BookList />);