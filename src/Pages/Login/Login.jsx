// import { use } from "react";
// import { Link, useLocation, useNavigate } from "react-router";
// import { AuthContext } from "../../Contexts/AuthContext";
// import Swal from "sweetalert2";

import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";
import Swal from "sweetalert2";


// const Login = () => {

//     const navigate = useNavigate();
//     const location = useLocation();
//     console.log(location);

//     // login user info from context
//     const { logInUser, googleSignIn } = use(AuthContext);

//     // login handle function
//     const handleLogin = (e) => {
//         e.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);

//         // log in user with email and password
//         logInUser(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 Swal.fire({
//                     title: "Good job!",
//                     text: "You log in successfully!",
//                     icon: "success"
//                 });
//                 form.reset();
//                 navigate(location?.state || '/');
//             })
//             .catch(error => {
//                 console.error(error.message);
//             })

//     }

//     // google login handle function
//     const handleLoginkWithGoogle = () => {
//         googleSignIn()
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 navigate(location?.state || '/');
//                 Swal.fire({
//                     title: "Good job!",
//                     text: "You log in successfully!",
//                     icon: "success",
//                     timer: 1500
//                 });
//             })
//             .catch(error => {
//                 console.error(error.message);
//             })


//     }

//     return (

//         <div>
//             <div className=' flex justify-center items-center'>
//                 <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-7">
//                     <div className="card-body">
//                         <form onSubmit={handleLogin} className="form-control w-full">
//                             <h1 className="md:text-3xl text-xl text-[#37324C] text-center mb-3 font-bold">Login now!</h1>

//                             {/* email box */}

//                             <label className="label mb-2 text-[#37324C]">Email</label>
//                             <input type="email" className="input w-full border border-[#8A4771]" name='email' placeholder="Email" />

//                             {/* password box */}

//                             <label className="label my-2 text-[#37324C]">Password</label>
//                             <input type="password" className="input w-full border border-[#8A4771]" name='password' placeholder="Password" />
//                             <div className='my-2'><a className="link link-hover">Forgot password?</a></div>
//                             {/* log in btn */}
//                             <div className='flex justify-center items-center'>
//                                 <button className="btn btn-block border hover:border-0 border-[#8A4771] hover:bg-[#8A4771] hover:text-white font-bold mb-2">Log in</button>
//                             </div>
//                             <p>
//                                 New to this site? <Link to="/register" className="link link-hover underline text-blue-500 font-semibold">Register here</Link>
//                             </p>
//                         </form>
//                         {/* Google */}
//                         <button onClick={handleLoginkWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
//                             <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
//                             Login with Google
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default Login;

// import { use } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom"; // Fixed from 'react-router'
// import { AuthContext } from "../../Contexts/AuthContext";
// import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { logInUser, googleSignIn } = use(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "Good job!",
                    text: "You logged in successfully!",
                    icon: "success"
                });
                form.reset();
                navigate(location?.state || '/');
            })
            .catch(error => {
                console.error(error.message);
            });
    };

    const handleLoginkWithGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "Good job!",
                    text: "You logged in successfully!",
                    icon: "success",
                    timer: 1500
                });
                navigate(location?.state || '/');
            })
            .catch(error => {
                console.error(error.message);
            });
    };

    return (
        <div className="flex justify-center items-center py-10 bg-[#f7f7f7] px-4">
            <div className="card bg-base-100 w-full max-w-sm shadow-xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center mb-6">Login Now</h1>
                    <form onSubmit={handleLogin} className="form-control w-full space-y-4">
                        <div>
                            <label className="label font-medium">Email</label>
                            <input type="email" name="email" required placeholder="Enter your email" className="input border border-[#8A4771] w-full" />
                        </div>

                        <div>
                            <label className="label font-medium">Password</label>
                            <input type="password" name="password" required placeholder="Enter your password" className="input border border-[#8A4771] w-full" />
                        </div>

                        <div className="text-right">
                            <a href="#" className="text-sm text-red-500 hover:underline">Forgot password?</a>
                        </div>

                        <button type="submit" className="btn btn-block bg-white text-[#8A4771] font-bold border border-[#8A4771] hover:bg-[#8A4771] hover:text-white transition duration-200">
                            Log In
                        </button>

                        <p className="text-sm text-center">
                            New to this site?{" "}
                            <Link to="/register" className="text-blue-500 font-semibold underline hover:no-underline">
                                Register here
                            </Link>
                        </p>
                    </form>

                    <div className="divider">OR</div>

                    <button onClick={handleLoginkWithGoogle} className="btn btn-block bg-white text-black border border-[#e5e5e5] hover:shadow-md transition duration-200">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <g>
                                <path d="M0 0H512V512H0" fill="#fff" />
                                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                            </g>
                        </svg>
                        <span className="ml-2">Login with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
