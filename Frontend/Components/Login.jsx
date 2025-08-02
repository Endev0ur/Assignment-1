import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className='min-h-screen min-w-screen flex justify-center items-center bg-gray-900 flex-col'>

        <div className='min-h-[450px] max-w-[430px] w-[95%]  bg-blue-200 rounded-lg border-5 border-blue-500 p-10'>
          <form>
            <fieldset className=' h-[100%] w-[100%] p-2'>
              <legend className='text-center text-4xl font-bold text-purple-900'>LOGIN FORM</legend>

              <br />
              <label htmlFor="email" className='text-xl font-bold mt-10'>Email : </label>
              <br />
              <input type="text" id='email' className='border-b mt-1 h-10 pl-5 pr-5 outline-none w-full' placeholder='Enter the Email id : '/>

              <br />
              <br />

              <label htmlFor="password" className='text-xl font-bold'>Password : </label>
              <br />
              <input type="text" id='password' className='border-b mt-1 h-10 pl-5 pr-5 outline-none w-full' placeholder='Enter the password : '/>

              <br />
              <br />
              <button className='pl-7 pr-7 pt-2 pb-2 rounded-lg bg-sky-500 font-bold shine cursor-pointer'>Login</button>

              <br />
              <br />
              <p className='text-lg'>Don't Have an Account ? <Link to="/signup" className='text-sky-900 underline cursor-pointer'>Sign Up</Link></p>
            </fieldset>

          </form>

        </div>
        <Link to="/dashboard" className='max-w-[430px] w-[95%] text-center bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 rounded-lg border-4 border-white mt-5 pt-3 pb-3 font-bold text-xl cursor-pointer'>Go to Dashboard</Link>

      </div>
    </>
  )
}

export default Login