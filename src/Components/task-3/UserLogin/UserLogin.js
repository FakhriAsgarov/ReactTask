import React, { Component } from 'react'
import './userLogin.css'
export default class UserLogin extends Component {
  render() {
    return (
      <div className='loginPage'>
        <label htmlFor="emailLabel">
        Email:
        <input onFocus={()=>console.log('only .ru domains')} type="email" name="userEmail" id="userEmail" />
        </label>
        <label htmlFor="passwordLabel">
        Password:
        <input onFocus={()=>console.log('8 symbols at least')} type="password" name="userPassword" id="userPassword" />
        </label>
        <button className='btn' >LOGIN</button>
      </div>
    )
  }
}

