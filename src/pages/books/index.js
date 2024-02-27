import BookCard from '@/components/BookCard/BookCard';
import React, { useEffect, useState } from 'react';

const BooksPage = () => {
    const [allbooks, setBooks] = useState([]);

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <div className='flex justify-center my-4 '>
                <input type="text" placeholder="Type Book Name.." className="input input-bordered w-full max-w-xs" />
                <button className='btn btn-primary ml-4'>Search</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 p-12 py-3 mx-3 '>
                {
                    allbooks.map(book => <BookCard key={book.id} book={book} />)
                }
            </div>
            
        </div>
    );
};

export default BooksPage;