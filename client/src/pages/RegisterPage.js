import React, { useState } from 'react'

const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    async function register(e) {
        e.preventDefault();

        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },

        })
        if (response.status === 200) {
            alert('resgitration succesfulll')

        }
        else {
            alert('register failed');
        }
    }
    return (
        <div>
            <form className="register" onSubmit={register}>
                <h1>Register</h1>
                <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder='username' />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='password' />
                <div className='btn'>
                    <button>Register</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage;