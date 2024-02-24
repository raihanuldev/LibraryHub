import React, { useEffect, useState } from 'react';

const Authors = () => {
    const [Authors, setAuhtors] = useState([]);

    useEffect(() => {
        fetch('/authors.json')
            .then(res => res.json())
            .then(data => setAuhtors(data))
    }, [])
    return (
        <div className='bg-[#0079B4] text-white'>
            <p className='text-center text-3xl font-semibold my-3'>Popular Auhtor {Authors.length}</p>


            <div className='grid md:grid-cols-3'>
                <div className='bg-[#006aa8] p-5 rounded-lg'>
                    <div className="w-[90px] mx-auto my-2 ">
                        <img className='rounded-full' alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                    <p className='font-semibold'>Auhtor Name: Mere Jannnn</p>
                    <p>Total Book:34</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas.</p>
                </div>
                
            </div>
        </div>
    );
};

export default Authors;