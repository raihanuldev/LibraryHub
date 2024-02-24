import React, { useEffect, useState } from 'react';

const Authors = () => {
    const [Authors,setAuhtors] = useState([]);

    useEffect(()=>{
        fetch('/authors.json')
        .then(res=>res.json())
        .then(data=>setAuhtors(data))
    },[])
    return (
        <div>
            <p className='text-center text-3xl font-semibold my-3'>Popular Auhtor {Authors.length}</p>
        </div>
    );
};

export default Authors;