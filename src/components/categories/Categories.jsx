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
            <div className='grid grid-cols-3 md:grid-cols-6 mx-2 '>
                {
                    Categories.map(category => <img key={category.id} className='rounded-lg my-3'  src={category?.categoryImg} alt="img" />
                    )
                }
            </div>
        </div>
    );
};

export default Categories;