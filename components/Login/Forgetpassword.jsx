
import Link from 'next/link';
import React from 'react';

const Forgetpassword = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen ">
                <div className="px-8 py-6 mx-4 mt-4 text-left bg-white  md:w-1/3 lg:w-1/3 sm:w-1/3">
                    <h3 className="text-2xl font-bold text-center uppercase">Recover password</h3>
                    <form action="">
                        <div className="mt-4">

                            <div className="mt-4">

                                <input type="text" placeholder="Email"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="mt-4">

                                <input type="password" placeholder="Password"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>


                            <div className="flex">
                                <button className="w-full px-6 py-2 mt-4 text-white bg-[#01BFD7] rounded-lg hover:bg-blue-900">Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Forgetpassword;