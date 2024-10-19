import React, { useState } from 'react'
import { LoginForm, RegisterForm } from '../components'

const Login = () => {

    const [register, setRegister] = useState(false)
    function handleRegister() {
        setRegister((prev) => !prev)
    }
    let content;

    if (register) {
        content = <LoginForm handleRegister={handleRegister} />
    } else {
        content = <RegisterForm handleRegister={handleRegister} />
    }
    return (
        <div className='login-content'>
            {content}
        </div>
    )
}

export default Login