import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Registration() {
  const [username, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  const navigate = useNavigate()
  const registeruser = async()=>{
    try {
      const response = await axios.post(
          'http://127.0.0.1:5000/register',
          { username, pass },
          {
              headers: {
                  'Content-Type': 'application/json'
              }
          }
      );
  } catch (error) {
      console.error('Error:', error);
      // Handle error states (e.g., network issues) here
  }
  }
  return (
    <>
      <main class="w-full flex-grow">
        <div class="min-h-[80vh] flex bg-gray-50 py-20">
          <div class="flex flex-1 flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
            <div>
              <div class="text-center sm:mx-auto sm:w-full sm:max-w-md">
                <h1 class="text-3xl font-extrabold text-gray-900">Create a <span class="bg-gradient-to-br from-indigo-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">free account</span></h1>
                <p class="max-w mt-2 text-sm text-gray-600">Hands-on practice modules, learning paths, community, and more.</p>
              </div>
              <div class="mt-8 bg-white px-4 py-8 shadow sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg sm:px-10">
                <div>
                  <div>
                    <div class="mt-1 grid grid-cols-2 gap-2">
                      <button data-testid="google-oauth-btn" class="inline-flex w-full cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 disabled:cursor-wait disabled:opacity-50"><span class="sr-only">Sign up with Google</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><clipPath id="p.0"><path d="m0 0l20.0 0l0 20.0l-20.0 0l0 -20.0z" clip-rule="nonzero"></path></clipPath><g clip-path="url(#p.0)"><path fill="currentColor" fill-opacity="0.0" d="m0 0l20.0 0l0 20.0l-20.0 0z" fill-rule="evenodd"></path><path fill="currentColor" d="m19.850197 8.270351c0.8574047 4.880001 -1.987587 9.65214 -6.6881847 11.218641c-4.700598 1.5665016 -9.83958 -0.5449295 -12.08104 -4.963685c-2.2414603 -4.4187555 -0.909603 -9.81259 3.1310139 -12.6801605c4.040616 -2.867571 9.571754 -2.3443127 13.002944 1.2301085l-2.8127813 2.7000687l0 0c-2.0935059 -2.1808972 -5.468274 -2.500158 -7.933616 -0.75053835c-2.4653416 1.74962 -3.277961 5.040613 -1.9103565 7.7366734c1.3676047 2.6960592 4.5031037 3.9843292 7.3711267 3.0285425c2.868022 -0.95578575 4.6038647 -3.8674583 4.0807285 -6.844941z" fill-rule="evenodd"></path><path fill="currentColor" d="m10.000263 8.268785l9.847767 0l0 3.496233l-9.847767 0z" fill-rule="evenodd"></path></g></svg></button><button data-testid="github-oauth-btn" class="inline-flex w-full cursor-pointer justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 disabled:cursor-wait disabled:opacity-50"><span class="sr-only">Sign up with GitHub</span><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg></button>
                    </div>
                  </div>
                  <div class="relative mt-6">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                      <div class="w-full border-t border-gray-300">
                      </div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                      <span class="bg-white px-2 text-gray-500">Or use email to signup</span>
                    </div>
                  </div>
                </div>
                <div class="mt-6">
                  <form class="space-y-2" onSubmit={registeruser}><div><label for="Name" class="mb-1 block text-sm font-medium text-gray-700">Name</label><input name="Name" placeholder="Enter your name" autocomplete="off" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm ring-indigo-500 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm" data-testid="name" />
                  </div>
                    <div><label for="Username" class="mb-1 block text-sm font-medium text-gray-700">Username</label><input name="Username" data-testid="username" autocomplete="off" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm ring-indigo-500" required="" minlength="3" maxlength="15" pattern="^[a-z0-9]+$" placeholder="Only alphanumeric allowed [a-z, 0-9]" type="text" /><small class="ml-1 text-xs italic opacity-80">Once set, username cannot be changed</small></div>
                    <div><label for="email" class="mb-1 block text-sm font-medium text-gray-700">Email Address</label><input data-testid="email" value={username} onChange={(e)=>setUsername(e.target.value)}placeholder="Enter your email address" autocomplete="off" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm ring-indigo-500" type="email" id="email" name="email" /></div>
                    <div>
                      <div>
                        <label for="Password" class="mb-1 block text-sm font-medium text-gray-700">Password</label><input data-testid="password" value={pass} onChange={(e)=>setPassword(e.target.value)}name="Password" placeholder="Enter a new password" autocomplete="off" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm ring-indigo-500 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm" minlength="5" maxlength="50" type="password" /></div>
                    </div>
                    <div>
                      <button type="submit" data-testid="submit-btn" disabled="" class="text-md group flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">Submit Details</button>
                      <small class="mt-3 flex justify-center"><span>Click submit details to proceed and<strong> verify your email</strong></span></small>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Registration