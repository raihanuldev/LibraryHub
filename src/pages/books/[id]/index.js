import { useRouter } from 'next/router';
import React from 'react';
import pdf from './../../../../public/raihanuldev.pdf'
import Swal from 'sweetalert2';

const BookDescription = () => {
    const router = useRouter();
    const { id } = router.query;
    const { bookData } = router.query;

    let book = null;
    const handlePay = () => {
        Swal.fire({
            title: "You Need to Pay For Hard Copy?",
            text: `Total Cost $ ${book.bookPrice}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Want to Pay!"
        }).then((result) => {
            if (result.isConfirmed) {

                Swal.fire({
                    title: "Please Wait I will add Payment Intregatin!",
                    text: "Your Payment Success.",
                    icon: "success"
                });
            }
        });
    }
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
                        <button onClick={handlePay} className="btn btn-primary">Collect Hard Copy</button>
                        <a className="btn btn-primary" href={pdf}>Download Pdf</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDescription;