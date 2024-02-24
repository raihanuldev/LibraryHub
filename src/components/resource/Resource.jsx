import React from 'react';
import BookImg from '../../../public/books.svg'
import Image from 'next/image';

const Resource = () => {
    return (
        <div className='bg-[#F4F6F9] text-black justify-center p-9 rounded-lg'>
            <p className='text-center font-bold text-4xl my-2'>Explore resources in libraries worldwide</p>
            <div className='grid grid-cols-2 md:grid-cols-3 space-x-2 space-y-2'>
                <div className='flex space-x-1'>
                    <Image src={BookImg} width={50} height={50} alt='book'/>
                    <div className=''>
                        <p className='text-xl font-semibold'>Books</p>
                        <p className='text-3xl font-thin'>400 Millions</p>
                    </div>
                </div>
                <div className='flex space-x-1'>
                    <Image src={BookImg} width={50} height={50} alt='book'/>
                    <div className=''>
                        <p className='text-xl font-semibold'>Books</p>
                        <p className='text-3xl font-thin'>400 Millions</p>
                    </div>
                </div>
                <div className='flex space-x-1'>
                    <Image src={BookImg} width={50} height={50} alt='book'/>
                    <div className=''>
                        <p className='text-xl font-semibold'>Books</p>
                        <p className='text-3xl font-thin'>400 Millions</p>
                    </div>
                </div>
                <div className='flex space-x-1'>
                    <Image src={BookImg} width={50} height={50} alt='book'/>
                    <div className=''>
                        <p className='text-xl font-semibold'>Books</p>
                        <p className='text-3xl font-thin'>400 Millions</p>
                    </div>
                </div>
                <div className='flex space-x-1'>
                    <Image src={BookImg} width={50} height={50} alt='book'/>
                    <div className=''>
                        <p className='text-xl font-semibold'>Books</p>
                        <p className='text-3xl font-thin'>400 Millions</p>
                    </div>
                </div>
                <div className='flex space-x-1'>
                    <Image src={BookImg} width={50} height={50} alt='book'/>
                    <div className=''>
                        <p className='text-xl font-semibold'>Books</p>
                        <p className='text-3xl font-thin'>400 Millions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resource;