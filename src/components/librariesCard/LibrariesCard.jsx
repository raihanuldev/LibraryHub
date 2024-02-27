import React from 'react';

const LibrariesCard = ({library}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={library.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{library.LibrariesName}!</h2>
                <address>{library.address}</address>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default LibrariesCard;