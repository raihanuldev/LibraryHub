import React from 'react';

const LibrariesCard = ({ library }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={library.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{library.LibrariesName}!</h2>
                <address>{library.address}</address>
                <div className="card-actions justify-end">
                    <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn btn-primary">View Details</button>
                </div>
            </div>
            
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">{library.LibrariesName}!</h3>
                    <figure><img className='my-4 rounded-lg' src={library.img} alt="" /></figure>
                    <p className="py-4 text-2xl">Address: {library.address}</p>
                    <p className="py-4 text-2xl">Phone: {library.phoneNumber}</p>
                </div>
            </dialog>

        </div>
    );
};

export default LibrariesCard;