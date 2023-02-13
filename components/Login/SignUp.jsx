import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useRef, useState } from 'react';
import toast from 'react-nextjs-toast';

const SignUp = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [error, setError] = useState(null);
  const formRef = useRef(null);
  const router = useRouter();
  const handleSubmit = async (event) => {
 

    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v1/registartion", {
        email,
        password,
        name,
      });
      const data = response.data;
      console.log(data);
    } catch (err) {
      setError(err.response?.data?.message);
    }
    setEmail("")
    setPassword("")
    setFirstName("")
    setLastName("")
    
    if (!email || !password) {
        setError("Both email and password are required.");
        return;
      }
      await router.push("/");
  };
  
    return (
        <>
            <div className="flex items-center justify-center min-h-screen ">
                <div className="px-8 py-6 mx-4 mt-4 text-left bg-white  md:w-1/3 lg:w-1/3 sm:w-1/3">
                    <h3 className="text-2xl font-bold text-center uppercase">Sign Up</h3>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <div className="mt-4">
                                <input type="text" placeholder="first name"
                                value={firstname}
                                onChange={(e) => setFirstName(e.target.value)}
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="mt-4">
                                <input type="text" placeholder="last name"
                                value={lastname}
                                onChange={(e) => setLastName(e.target.value)}
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="mt-4">
                                <input type="text" placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="mt-4">
                                <input type="password" placeholder="Password"
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="flex">
                                <button type='submit' className="w-full px-6 py-2 mt-4 text-white bg-[#01BFD7] rounded-lg hover:bg-blue-900">Login</button>
                                
                            </div>
                            {error && <div className='text-red-500 p-2'>{error}</div>}
                            <div className="mt-6 text-gray-400 space-x-3">
                                <span className='hover:underline' href="/signup">Already Account have an account?</span>
                                <Link className="hover:underline" href="/login">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;