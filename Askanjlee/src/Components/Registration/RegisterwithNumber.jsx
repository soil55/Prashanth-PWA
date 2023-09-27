import React, { useState } from 'react'
import axios from 'axios';

function RegisterwithNumber() {
  const [otp,setOtp] = useState("")
  const [number,setNumber] = useState("")

  const [checkotp, setCheckotp ] = useState("");

  const sendNumber = async()=>{
    console.log(number)
    try {
      const response = await axios.post(
          'http://127.0.0.1:5000/getOtp',
          {number},
          {
              headers: {
                  'Content-Type': 'application/json'
              }
          }
      );
      setCheckotp(response.data.otp);
  } 
  catch(error){
    console.error('Error:', error);
    }
  }
  const checker = ()=>{
    console.log(otp,checkotp)
    if(checkotp==otp){
      window.location.href='/' //indicating that authentication was successful
    }
  }

  
  
  return (
    <>
    <main className="w-full flex-grow">
        <div className="min-h-[80vh] flex bg-gray-50 py-20">
          <div className="flex flex-1 flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
            <div>
              <div className="mt-8 bg-white px-4 py-8 shadow sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg sm:px-10">
                <div>
            
                  <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="w-full border-t border-gray-300">
                      </div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-white px-2 text-gray-500">Enter Mobile Number Again for OTP</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="space-y-2"><div>
                  </div>
                    
                    <div><label for="Number" className="mb-1 block text-sm font-medium text-gray-700">Mobile Number</label><input name="Username" value={number} onChange={e=>setNumber(e.target.value)} data-testid="username" autocomplete="off" className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm ring-indigo-500" required="" minlength="10" maxlength="15" placeholder="+91" type="text" /></div>
                    <button type="submit" data-testid="submit-btn" onClick={sendNumber} className="text-md group flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">Get OTP </button>

                    <div>
                    <div><label for="OTP" className="mb-1 block text-sm font-medium text-gray-700">OTP</label><input data-testid="email" value={otp}  onChange = {e=>setOtp(e.target.value)}placeholder="Enter your OTP" autocomplete="off" className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm ring-indigo-500" type="text" id="OTP" name="OTP" /></div>
                      <button type="submit" data-testid="submit-btn" disabled="" onClick={checker}className="text-md group flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">Submit </button>
                      <small className="mt-3 flex justify-center"><span>Click submit to proceed and<strong> verify your OTP</strong></span></small>
                    </div>
                    </div>
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