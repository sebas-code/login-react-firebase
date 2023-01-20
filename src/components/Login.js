import React from 'react'
import imglogin from '../img/login.png'

const login = () => {
  return (
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
      
      <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5'>

        <div className='sm:w-1/2 px-16'>
          <h2 className='font-bold-text-2xl'>Login</h2>
          <p className='text-sm mt-4'>If you already member, easily log in</p>

          <form action="" className='flex flex-col gap-4 mt-2'>
            <input className='p-2 mt-4 rounded-xl border' type="text" name='email' placeholder='Enter your email' />
            <input className='p-2 mt-1 rounded-xl border' type="password" name='password' placeholder='Enter your password'/>
            <button className='bg-teal-700 rounded-xl text-white pt-2 py-3'>Log In</button>
          </form>
        </div>

        <div className='sm:block hidden w-1/2 p-5'>
            <img className='rounded-2xl' src={imglogin} alt="" />
        </div>

      </div>
    </section>

  )
}

export default login