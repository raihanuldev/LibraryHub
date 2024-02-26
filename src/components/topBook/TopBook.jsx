import React, { useEffect, useState } from 'react';
import BookCard from '../BookCard/BookCard';

const TopBook = () => {
    const [TopBok,setTopBook] = useState([]);
    useEffect(()=>{
        fetch('/books.json').then(res=>res.json()).then(data=>setTopBook(data))
    },[])
    return (
        <div className='flex space-x-4 justify-center'>
            {
                TopBok.slice(0,3).map(book=> <BookCard key={book.id} book = {book}></BookCard>)
            }     
        </div>

    );
};

export default TopBook;