"use client"
import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [Categories, setCategoris] = useState([])
    useEffect(() => {
        fetch('/category.json').then(res => res.json()).then(data => setCategoris(data))
    }, [])
    return (
        <div>
            <p className='text-center my-4 text-4xl'>Categories Book</p>
            <div className='flex justify-center'>
                {
                    Categories.map(category => <img key={category.id} className='w-[10%]' src={category?.categoryImg} alt="img" />
                    )
                }
            </div>
        </div>
    );
};

export default Categories;