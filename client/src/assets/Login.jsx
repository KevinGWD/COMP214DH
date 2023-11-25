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
        <p>forgot password?</p>
        <NavLink to='/loggedin'><button>Login</button></NavLink>
      </form>
      </div>
  )
}
