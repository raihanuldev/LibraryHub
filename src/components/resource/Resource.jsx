import React from 'react';
import BookImg from '../../../public/books.svg'
import ArticleImg from '../../../public/article-chapter.svg'
import SoundImg from '../../../public/recordings.svg';
import MusicImg from '../../../public/scores.svg';
import MapImg from '../../../public/map.svg';
import ThesesImg from '../../../public/theses.svg';
import Image from 'next/image';

const Resource = () => {
    return (
        <div className='bg-[#F4F6F9] text-black justify-center  p-9 rounded-lg'>
            <p className='text-center font-bold text-4xl my-2'>Explore resources in libraries worldwide</p>
            <div className='grid justify-center items-center grid-cols-2 md:grid-cols-3 space-x-2 space-y-8'>
                <div className='flex space-x-1'>
                    <Image src={BookImg} width={50} height={50} alt='book'/>
                    <div className=''>
                        <p className='text-xl font-semibold'>Books</p>
                        <p className='text-3xl font-thin'>400 Millions</p>
                    </div>
                </div>
                <div className='flex space-x-1'>
                    <Image src={ArticleImg} width={50} height={50} alt='book'/>
                    <div className=''>
                        <p className='text-xl font-semibold'>Article</p>
                        <p className='text-3xl font-thin'>600+ Millions</p>
                    </div>
                </div>
                <div className='flex space-x-1'>
                    <Image src={SoundImg} width={50} height={50} alt='book'/>
                    <div className=''>
                        <p className='text-xl font-semibold'>Audio</p>
                        <p className='text-3xl font-thin'>150 Billion</p>
                    </div>
                </div>
                <div className='flex space-x-1'>
                    <Image src={MusicImg} width={50} height={50} alt='book'/>
                    <div className=''>
                        <p className='text-xl font-semibold'>Vocal </p>
                        <p className='text-3xl font-thin'>154 Millions</p>
                    </div>
                </div>
                <div className='flex space-x-1'>
                    <Image src={MapImg} width={50} height={50} alt='book'/>
                    <div className=''>
                        <p className='text-xl font-semibold'>Libbary</p>
                        <p className='text-3xl font-thin'>780 Millions</p>
                    </div>
                </div>
                <div className='flex space-x-1'>
                    <Image src={ThesesImg} width={50} height={50} alt='book'/>
                    <div className=''>
                        <p className='text-xl font-semibold'>Theses</p>
                        <p className='text-3xl font-thin'>40 Millions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resource;