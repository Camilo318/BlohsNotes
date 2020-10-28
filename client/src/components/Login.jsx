import React, { useRef, useState } from 'react'
import { showToast } from '../toast'
import axios from 'axios'

const Login = ({history}) => {
    const login = useRef(null)
    const closeLogin = e => {
        if (e.target === login.current) {
            history.push('/')
        }
    }

    const [user, setUser] = useState({})

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios({
                url: 'http://localhost:3000/api/v1/users/sign-in',
                method: 'POST',
                auth: {
                    username: user.email,
                    password: user.password
                }
            })
            const { data } = res
            if (data.token) {
                localStorage.setItem('token', data.token)
                showToast('success', `Welcome back ${data.user.username} 😁`)
                history.push('/')
            }
            else {
                showToast('error', 'Invalid Credentials')
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleInputChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='login' ref={login} onClick={closeLogin}>
            <div className="login__content">
                <h3>Access your account</h3>
                <form className='login__form' onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"
                    onChange={handleInputChange}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"
                    onChange={handleInputChange}/>

                    <button type="submit">Login</button>

                </form>
            </div>
        </div>
    )
}

export default Login
