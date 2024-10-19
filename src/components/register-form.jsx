import React, { Fragment, useContext, useState } from 'react'
import { UserContext } from '../context/usercontext'

const RegisterForm = ({ handleRegister }) => {
    const { userHandler } = useContext(UserContext)
    const [loginData, setLoginData] = useState({
        login: "",
        password: ""
    })

    function handleChange(e) {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    function onSubmit(e) {
        e.preventDefault()
        if (loginData.login == "login" && loginData.password == "password") {
            userHandler()
        }

    }
    return (
        <Fragment>

            <form className='login-form' onSubmit={onSubmit}>
                <h1>Register</h1>

                <div className='rows'>
                    <label htmlFor="login">Login</label>
                    <input type="text" id='login' name="login" onChange={(e) => handleChange(e)} />
                </div>
                <div className='rows'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' name="password" onChange={(e) => handleChange(e)} />
                </div>
                <button type='submit'>Submit</button>
                <button type='button' className='register-btn' onClick={handleRegister}>Login</button>
            </form>
        </Fragment>
    )
}

export default RegisterForm