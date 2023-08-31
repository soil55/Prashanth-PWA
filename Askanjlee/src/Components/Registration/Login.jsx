import React , {useState} from 'react'
import "../../index.css"
import { useNavigate} from 'react-router-dom';

import clientrequests from '../clientrequests';


function Login() {
    
    const [error,seterror] = useState(null);

    const [username, setUsername] = useState('');
    const [pass,setpass] = useState('');

    const handleinput = event =>{
        const value = event.target.value;
        setpass(value);
    }

    const navigate = useNavigate()

    const Navtolanding = async () => {
        try {
            const response = await clientrequests.post(
                'http://127.0.0.1:5000/login',
                { username, pass },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            window.location.href='/Home'
        } catch (error) {
            console.error('Error:', error);
            // Handle error states (e.g., network issues) here
        }
    }

    return (
        <>
            <main className="w-full flex-grow">
                <div className="bg-gray-50">
                    <div className="flex min-h-[80vh] flex-col justify-center py-12 pt-20 sm:px-6 lg:px-8">
                        <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
                            <h1 className="text-3xl font-extrabold text-gray-900">Sign in to<span className="bg-gradient-to-br from-indigo-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent"> AskAnjlee</span>
                            </h1>
                        </div>
                        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                            <div className="bg-white px-4 pb-4 pt-8 sm:rounded-lg sm:px-10 sm:pb-6 sm:shadow">
                                <form className="space-y-6" onSubmit={Navtolanding}>
                                    <div>
                                        <label for="email" className="block text-sm font-medium text-gray-700">Email address / Username</label>
                                        <div className="mt-1">
                                            <input id="email" type="text" data-testid="username" required="" className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 disabled:cursor-wait disabled:opacity-50 sm:text-sm" value={username} onChange={(e)=>setUsername(e.target.value)}aria-required />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                                        <div className="mt-1">
                                            <input id="password" name="password" type="password" data-testid="password" autocomplete="current-password" required="" className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 disabled:cursor-wait disabled:opacity-50 sm:text-sm" aria-required value={pass} onChange={handleinput}/>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 disabled:cursor-wait disabled:opacity-50" />
                                            <label for="remember_me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                                        </div>
                                        <div className="text-sm">
                                            <a className="font-medium text-indigo-600 hover:text-indigo-500" href="/password-reset">Forgot your password?</a>
                                        </div>
                                    </div>
                                    <div>
                                        <button data-testid="login" type="submit"  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50">
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd">
                                                </path>
                                                </svg>
                                            </span>Sign In</button>
                                    </div>
                                    {error && <div style={{color:'red'}}>{error}</div>}
                                </form>
                                <div className="mt-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300">
                                            </div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="bg-white px-2 text-gray-500">Or continue with</span>
                                        </div>
                                    </div>
                                    <div className="mt-6 grid grid-cols-2 gap-3">
                                        <button className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 disabled:cursor-wait disabled:opacity-50" data-testid="google-oauth-btn">
                                            <span className="sr-only">Sign in with Google</span>
                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><clipPath id="p.0"><path d="m0 0l20.0 0l0 20.0l-20.0 0l0 -20.0z" clip-rule="nonzero"></path></clipPath><g clip-path="url(#p.0)"><path fill="currentColor" fill-opacity="0.0" d="m0 0l20.0 0l0 20.0l-20.0 0z" fill-rule="evenodd"></path><path fill="currentColor" d="m19.850197 8.270351c0.8574047 4.880001 -1.987587 9.65214 -6.6881847 11.218641c-4.700598 1.5665016 -9.83958 -0.5449295 -12.08104 -4.963685c-2.2414603 -4.4187555 -0.909603 -9.81259 3.1310139 -12.6801605c4.040616 -2.867571 9.571754 -2.3443127 13.002944 1.2301085l-2.8127813 2.7000687l0 0c-2.0935059 -2.1808972 -5.468274 -2.500158 -7.933616 -0.75053835c-2.4653416 1.74962 -3.277961 5.040613 -1.9103565 7.7366734c1.3676047 2.6960592 4.5031037 3.9843292 7.3711267 3.0285425c2.868022 -0.95578575 4.6038647 -3.8674583 4.0807285 -6.844941z" fill-rule="evenodd"></path><path fill="currentColor" d="m10.000263 8.268785l9.847767 0l0 3.496233l-9.847767 0z" fill-rule="evenodd"></path></g></svg></button>
                                    </div>
                                </div>
                                <div className="m-auto mt-6 w-fit md:mt-8">
                                    <span className="m-auto">Don't have an account? <a className="font-semibold text-indigo-600" href="/Registration">Create Account</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </main>

        </>
    )
}

export default Login