import React from 'react';

const AuthorCard = ({author}) => {
    return (
        <div className='bg-[#006aa8] p-5 rounded-lg'>
            <div className="w-[90px] mx-auto my-2 ">
                <img className='rounded-lg' alt="Tailwind CSS chat bubble component" src={author.img} />
            </div>
            <p className='font-semibold'>Auhtor Name: {author.name}</p>
            <p>Total Book:34</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas.</p>
        </div>
    );
};

export default AuthorCard;