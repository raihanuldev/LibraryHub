import React from 'react';
 
const Banner = () => {
    return (
        <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: 'url(https://s26162.pcdn.co/wp-content/uploads/2023/06/overflowing-bookcases.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md flex">
                    <input type="text" placeholder="Type Book Name.." className="input input-bordered w-full max-w-xs"  />
                    <button className='btn'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;