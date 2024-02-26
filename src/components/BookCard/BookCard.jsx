import Link from 'next/link';
import React from 'react';

const BookCard = ({ book }) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <Link href={{ pathname: `/books/${book.id}`, query: { bookData: JSON.stringify(book) }} }>
                <figure><img src={book.bookImg} alt="book" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {book.bookName}!
                        <div className="badge badge-secondary">Best Sell</div>
                    </h2>
                    <p>{book.bookDescription}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Motivational</div>
                        <div className="badge badge-outline">Self</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BookCard;