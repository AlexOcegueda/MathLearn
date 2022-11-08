import React from 'react'

function Login() {
    return (
        <>
            <div className='login-container'>
                <h1 className='Login'>Login</h1>
                <p className='username-text'>UserName</p>
                <input type='text' id='username-input'></input> 
                <p className='password-text'>Password</p>
                <input type='text' id='password-input'></input>
                <br></br>
                <input type='submit' value='Submit' id='submit'></input>
            </div>

            <div className='dead-space'></div>
        </>
    )
}

export default Login;