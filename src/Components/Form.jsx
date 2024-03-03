import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpUser } from '../Store/Async Actions/signup';
import { login } from '../Store/Async Actions/login';

const Form = ({ type }) => {
    const dispatch = useDispatch();
    const unRef = useRef();
    const passRef = useRef();
    const emailRef = useRef();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (type === "Sign Up") {
            dispatch(signUpUser({
                name: unRef.current.value,
                email: emailRef.current.value,
                password: passRef.current.value
            }))
        } else if (type === "Login") {
            dispatch(login({ email: emailRef.current.value, password: passRef.current.value }));
        }
    }
    return (
        <div className="flex justify-center mt-10">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md" onSubmit={handleSubmit} >
                {type === "Sign Up" &&
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            ref={unRef}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                }
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        ref={emailRef}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        ref={passRef}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                </div>
                <div className="flex items-center justify-evenly">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        {type}

                    </button>

                    <p className="text-gray-600">
                        Already registered ?
                        <Link type='button' to={type === "Sign Up" ? "/login" : "/signup"} className='ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' >
                            {type === "Sign Up" ? <>Login</> : <>Sign Up</>}
                        </Link>
                    </p>
                </div>
                <div className="text-sm mt-4 flex justify-evenly">
                    <p className="text-gray-600">
                        By signing up, you agree to our{' '}
                        <Link to='/terms&services' className="text-blue-500 hover:text-blue-700">
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link to='/privacyPolicy' className="text-blue-500 hover:text-blue-700">
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Form;
