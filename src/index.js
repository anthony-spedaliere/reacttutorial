import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

// React Component Basic Rules
// function name starts with capital letter
// must return JSX (html) - only one parent element (cannot return adjacent elements). React.Fragment can be used or <> </>
// always close tag

const books = [
    {
        id : 0,
        imageURL: 'https://images-na.ssl-images-amazon.com/images/I/810bsxh1MmL._AC_UL600_SR600,400_.jpg',
        title : 'How to Catch the Easter Bunny',
        author: 'Adam Wallace (Author) and Andy Elkerton (Illustrator)'
    },
    {
        id : 1,
        imageURL: 'https://images-na.ssl-images-amazon.com/images/I/81fyoFoaxlL._AC_UL600_SR600,400_.jpg',
        title : 'Dog Man: Twenty Thousand Fleas Under the Sea: A Graphic Novel (Dog Man #11): From the Creator of Captain Underpants',
        author: 'Dave Pilkey'
    },
    {
        id : 2,
        imageURL: 'https://images-na.ssl-images-amazon.com/images/I/913UqrSJf6L._AC_UL600_SR600,400_.jpg',
        title : 'The Return of the Gods',
        author: 'Jonathan Cahn'
    },
    {
        id : 3,
        imageURL: 'https://images-na.ssl-images-amazon.com/images/I/61RnYtO-QUL._AC_UL600_SR600,400_.jpg',
        title : 'Got Your Number: The Greatest Sports Legends and the Numbers They Own',
        author: 'Mike Greenberg'
    },
]

// Javascript entry point - connects the index.js root to the public index.html entry point root
function BookList() {
    return (
        <section className='booklist'>
            <Book imageURL = {books[0].imageURL} author={books[0].author} title={books[0].title}/>
            <Book imageURL = {books[1].imageURL} author={books[1].author} title={books[1].title}/>
            <Book imageURL = {books[2].imageURL} author={books[2].author} title={books[2].title}/>
            <Book imageURL = {books[3].imageURL} author={books[3].author} title={books[3].title}/>
        </section>
    );
}

const Book = (props) => {
    const { imageURL, title, author } = props;
    
    return (
        <article className='book'>
            <img src= {imageURL} alt={title}/>
            <h2>Title: {title}</h2>
            <h4>By: {author}</h4>
        </article>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(< BookList />);