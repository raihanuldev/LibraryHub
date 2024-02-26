import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';

const TopBook = () => {
    const [TopBok,setTopBook] = useState([]);
    useEffect(()=>{
        fetch('/books.json').then(res=>res.json()).then(data=>setTopBook(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mx-8 my-5 py-8'>
            {
                TopBok.slice(0,3).map(book=> <BookCard key={book.id} book = {book}></BookCard>)
            }     
        </div>

    );
};

export default TopBook;