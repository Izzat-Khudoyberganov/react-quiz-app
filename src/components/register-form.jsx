import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
    const [loginData, setLoginData] = useState({
        login: "",
        password: "",
    });

    function handleChange(e) {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    }

    function onSubmit(e) {
        e.preventDefault();
        if (loginData.login == "login" && loginData.password == "password") {
            console.log("Register");
        }
    }
    return (
        <Fragment>
            <form className='login-form' onSubmit={onSubmit}>
                <h1>Register</h1>

                <div className='rows'>
                    <label htmlFor='login'>Login</label>
                    <input
                        type='text'
                        id='login'
                        name='login'
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className='rows'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <button type='submit'>Submit</button>
                <Link to='/login' className='register-btn'>
                    Login
                </Link>
            </form>
        </Fragment>
    );
};

export default RegisterForm;
