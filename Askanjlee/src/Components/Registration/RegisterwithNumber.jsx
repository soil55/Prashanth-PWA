import React from 'react'

function RegisterwithNumber() {
  return (
    <>
    <main class="w-full flex-grow">
        <div class="min-h-[80vh] flex bg-gray-50 py-20">
          <div class="flex flex-1 flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
            <div>
              <div class="mt-8 bg-white px-4 py-8 shadow sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg sm:px-10">
                <div>
            
                  <div class="relative mt-6">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                      <div class="w-full border-t border-gray-300">
                      </div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                      <span class="bg-white px-2 text-gray-500">Enter Mobile Number</span>
                    </div>
                  </div>
                </div>
                <div class="mt-6">
                  <form class="space-y-2"><div>
                  </div>
                    <div><label for="Number" class="mb-1 block text-sm font-medium text-gray-700">Mobile Number</label><input name="Username" data-testid="username" autocomplete="off" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm ring-indigo-500" required="" minlength="10" maxlength="15" placeholder="+91" type="text" /></div>
                    <button type="submit" data-testid="submit-btn" disabled="" class="text-md group flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">Get OTP </button>
                    <div><label for="OTP" class="mb-1 block text-sm font-medium text-gray-700">OTP</label><input data-testid="email" placeholder="Enter your OTP" autocomplete="off" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm ring-indigo-500" type="text" id="OTP" name="OTP" /></div>
                    <div>
                      <button type="submit" data-testid="submit-btn" disabled="" class="text-md group flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">Submit </button>
                      <small class="mt-3 flex justify-center"><span>Click submit to proceed and<strong> verify your OTP</strong></span></small>
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

export default RegisterwithNumber