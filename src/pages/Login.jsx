import React, { useState } from 'react';
import { Redirect, Link } from "react-router-dom"
import swal from 'sweetalert'
import axios from 'axios'
import { setToken } from '../utils/Auth'
import '../styles/Login.css'

const ApiUrl = process.env.REACT_APP_APIURL

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [successLogin, setSuccessLogin] = useState(false)

    const onSubmit = e => {
        e.preventDefault()
        const logUser = {
            "email": email,
            "password": password
        }
        loginUser(logUser)
    }

    const loginUser = async(userData) => {
        let res = await axios.post(`${ApiUrl}/api/users/login`, userData)
        console.log(res.data)
        if(res.data.loginSuccess){
            setSuccessLogin(true)
            setToken(res.data.token) 
            window.location.reload()
        }else{
            swal(res.data.message, "Por favor intente de nuevo");
            console.log(res.data.message)
        }
    };

    return (
        <>
            {successLogin ? 
            <Redirect to="/dashboard" /> :
                <div className="login_container">
                    <div className="card_login">
                        <div className="login_form">
                            <img src="/logo-batman.png" alt=""/>
                            <h4>¡Bienvenido!</h4>
                            <p>Ingresa tu email y contraseña.</p>
                            <form  onSubmit={onSubmit} method="post">

                                <label htmlFor="email">Correo</label>
                                <input 
                                id="email" 
                                type="email" 
                                placeholder="Correo"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                />

                                <label htmlFor="password">Contraseña</label>
                                <input 
                                id="password" 
                                type="password" 
                                placeholder="Contraseña"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                />
                                <button type="submit">Login</button>
                            </form>
                            <p>¿Aun no tienes cuenta? <Link to="/registrate"> Registrate</Link></p>
                        </div>
                        <div className="login_image">
                            <img src="/login-img.png" alt=""/>
                        </div>
                    </div> 
                </div>
            }
            
        </>
        
    )
}
