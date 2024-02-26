import { useRouter } from 'next/router';
import React from 'react';
import pdf from './../../../../public/raihanuldev.pdf'

const bookDescription = () => {
    const router = useRouter();
    const { id } = router.query;
    const { bookData } = router.query;

    let book = null;
    if (bookData) {
        try {
            book = JSON.parse(bookData);
            console.log("data: ", book)
        } catch (error) {
            console.error("Error parsing book data:", error);
        }
    }

    console.log("book:", book);
    if (book == null) {
        return <p>Loading</p>
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={book.bookImg} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{book.bookName}</h1>
                    <p className="py-6">{book.bookDescription}</p>
                    <p className='font-semibold'>Author: {book.author}</p>
                    <p className='font-semibold'>Author Email: {book.authorEmail}</p>

                    <div className='flex space-x-3 mt-4'>
                        <button className="btn btn-primary">Collect Hard Copy</button>
                        <a className="btn btn-primary" href={pdf}>Download Pdf</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default bookDescription;