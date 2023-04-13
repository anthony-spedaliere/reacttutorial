

const Book = (props) => {
    const { imageURL, title, author, children, id, getBook } = props;

    return (
        <article className='book'>
            <img src= {imageURL} alt={title}/>
            <h2>Title: {title}</h2>            
            <h4>By: {author}</h4>
            <button onClick={() => getBook(id)}>Click</button>
            {children}
        </article>
    );
}

export default Book;