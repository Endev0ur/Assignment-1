import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
      <div className='min-h-screen min-w-screen flex justify-center items-center bg-gray-900'>

        <div className='min-h-[500px] max-w-[430px] w-[95%]  bg-blue-200 rounded-lg border-5 border-blue-500 p-10'>
          <form>
            <fieldset className=' h-[100%] w-[100%] p-2'>
              <legend className='text-center text-4xl font-bold text-purple-900'>SIGNUP FORM</legend>


              <br />
              <label htmlFor="username" className='text-xl font-bold mt-10'>Name : </label>
              <br />
              <input type="text" id='username' className='border-b mt-1 h-10 pl-5 pr-5 outline-none w-full' placeholder='Enter the Name : '/>

              <br />
              <br />

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
              <button className='pl-7 pr-7 pt-2 pb-2 rounded-lg bg-sky-500 font-bold shine cursor-pointer'>Sign Up</button>

              <br />
              <br />
              <p className='text-lg'>Already have an account ? <Link to="/login" className='text-sky-900 underline cursor-pointer'>Login</Link></p>
            </fieldset>

          </form>

        </div>

      </div>
    </>
  )
}

export default Signup
