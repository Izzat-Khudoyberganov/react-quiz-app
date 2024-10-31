import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

const LoginForm = () => {
    const { user, userHandler } = useContext(UserContext);
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
            userHandler(true);
            console.log(user);
        }
    }
    return (
        <Fragment>
            <form className='login-form' onSubmit={onSubmit} autoComplete='off'>
                <h1>Login</h1>

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
                        type='text'
                        id='password'
                        name='password'
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <button type='submit' className='form-submit-btn'>
                    Submit
                </button>
                <Link to='/register' className='register-btn'>
                    Register
                </Link>
            </form>
        </Fragment>
    );
};

export default LoginForm;
