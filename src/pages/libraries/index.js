import LibrariesCard from '@/components/librariesCard/LibrariesCard';
import React, { useEffect, useState } from 'react';

const page = () => {
    const [libraiess, setLibraries] = useState([]);

    useEffect(() => {
        fetch('/libraries.json').then(res => res.json()).then(data => setLibraries(data))
    }, [])
    return (
        <div>
            <div className='flex justify-center my-4 '>
                <input type="text" placeholder="Search Libraries" className="input input-bordered w-full max-w-xs" />
                <button className='btn btn-primary ml-4'>Search</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 space-y-3 mx-8 p-5'>
                {
                    libraiess.map(library => <LibrariesCard key={library.id} library={library} />)
                }
            </div>
        </div>
    );
};

export default page;