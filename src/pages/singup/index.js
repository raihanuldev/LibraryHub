import React from 'react';
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import Link from 'next/link';

const SingUp = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Login Succesfully',
            showConfirmButton: false,
            timer: 1500
        })
        
        // LoginUser(data.email, data.password)
        //     .then(result => {
                

        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
    };
    return (
        <div className="bg-base-200 mx-auto sm:w-1/3 p-5 my-6 rounded-3xl">
            <p className="text-3xl text-center ">Join With Us</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input  {...register("name", { required: true })} type="text" placeholder="Enter Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input  {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input  {...register("password", { required: true })} type="text" placeholder="PassWord" className="input input-bordered" />
                    </div>
                    <div className="flex">
                        <p className="flex justify-end"><small><Link href='/login'>have an account?</Link></small></p>
                    </div>
                    <button className="btn btn-secondary">SingUp</button>
                </div>

            </form>
            {/* <Social></Social> */}
        </div>
    );
};

export default SingUp;