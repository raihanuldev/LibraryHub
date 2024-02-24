import React from 'react';

const HowtoUse = () => {
    return (
        <div className='bg-[#007EBD] rounded-lg text-white my-2'>
            <p className='text-center text-4xl py-5'>How to use LibbaryHub.org</p>
            <div className='grid md:grid-cols-2 p-5'>
                <div className='p-8'>
                    <p className='text-center text-2xl inline font-semibold'>Welcome to LibbaryHub.org</p>
                    <p>Get started with WorldCat.org. In about two minutes, you can learn how to make a WorldCat.org profile, create and add items to lists, export citations, and use facets to narrow your search criteria. It’s a quick way to introduce yourself to the basics of searching the world’s largest collection of information about materials in libraries.</p>
                </div>
                <div className='p-8'>
                    <p className='text-center text-2xl inline font-semibold'>Use LibbaryHub.org for school research</p>
                    <p>Learn additional basic and advanced search techniques in this simple tutorial. We’ll walk through how to get resources for a solar system report that a younger student (maybe working with a parent or teacher) might be assigned and provide tips for college students and more advanced researchers.</p>
                </div>
            </div>
        </div>
    );
};

export default HowtoUse;