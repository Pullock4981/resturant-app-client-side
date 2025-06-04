
import React, { use } from 'react';
import { Link, Navigate } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
// import { Link } from 'react-router-dom';

const Register = () => {
    // user info
    const { createUser,googleSignIn } = use(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const { email, password, ...rest } = Object.fromEntries(formData.entries());

        // console.log('Register Info:', { name, photoURL, email, password });

        const userInfo = {
            email,
            ...rest,
        };

        createUser(email, password)
            .then((res) => {
                // Signed up 
                console.log(res.user)
                // ...
            })
            .catch((error) => {
                console.log(error)
                // ..
            });


        // TODO: Add your register logic with validation, Firebase/Auth system, toast alerts, etc.
    };

    const handleSignInWithGoogle = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user);
                // Swal.fire("Success!", "Signed in with Google!", "success");
                Navigate("/");
            })
            .catch((error) => {
                console.error(error.message);
            });
    };

    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="card  w-full max-w-sm shadow-2xl my-7">
                    <div className="card-body">
                        <form onSubmit={handleRegister} className="form-control w-full">
                            <h1 className="text-xl md:text-3xl text-[#37324C] text-center mb-3 font-bold">Please Register</h1>

                            <label className="label text-[#37324C]">Name</label>
                            <input type="text" className="input w-full border border-[#8A4771]" name="name" placeholder="Your Name" required />

                            <label className="label mt-1 text-[#37324C] ">Photo URL</label>
                            <input type="text" className="input w-full border border-[#8A4771]" name="photoURL" placeholder="Photo URL" required />

                            <label className="label mt-1 text-[#37324C]">Email</label>
                            <input type="email" className="input w-full border border-[#8A4771]" name="email" placeholder="Email" required />

                            <label className="label mt-1 text-[#37324C]">Password</label>
                            <input type="password" className="input mb-2 w-full border-[#8A4771]" name="password" placeholder="Password" required />

                            <button type="submit" className="btn btn-block border hover:border-0 border-[#8A4771] hover:bg-[#8A4771] hover:text-white font-bold mb-2">
                                Register
                            </button>

                            <p className="text-center text-[#37324C]">
                                Already have an account?{" "}
                                <Link to="/login" className="link link-hover underline text-blue-500 font-semibold">
                                    Log in
                                </Link>
                            </p>
                        </form>

                        <div className="divider">OR</div>

                        {/* Google Sign In */}
                        <button onClick={handleSignInWithGoogle} className="btn bg-white text-black border">
                            <svg aria-label="Google logo" width="16" height="16" viewBox="0 0 512 512">
                                <path fill="#EA4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                                <path fill="#FBBC05" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                                <path fill="#34A853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                                <path fill="#4285F4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                            </svg>
                            <span className="ml-2">Sign up with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
