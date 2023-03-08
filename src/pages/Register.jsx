import React from 'react'
import Add from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Private Chat</span>
        <span className='title'>Register</span>
        <form action=''>
          <input type='text' placeholder='display name' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <input type='file' id='file' style={{ display: 'none' }} />
          <label htmlFor='file'>
            <img src={Add} alt='' />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
