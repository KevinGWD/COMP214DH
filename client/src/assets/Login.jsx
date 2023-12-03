import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form  method='post'>
        <label htmlFor="username">Username</label>
        <input type="text" id='username'/>
        <label htmlFor="password">Password</label>
        <input type="text" id='password'/>
        <div>forgot password?</div><br />
        <div><NavLink to='/loggedin'><button className='log-in-button'>Login</button></NavLink></div>
      </form>
      </div>
  )
}
