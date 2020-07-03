import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'
import swal from 'sweetalert'
import '../styles/Login.css'

const ApiUrl = process.env.REACT_APP_APIURL

export default function Register() {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [successReg, setSuccessReg] = useState(false)

    const registerUser = async(userData) => {
        let res = await axios.post(`${ApiUrl}/api/users/register`, userData)
        if(res.data.success){
            setSuccessReg(true)
        }
    };
      
    const onSubmit = e => {
        e.preventDefault()
        if(password !== password2){
            swal("Las contraseñas no coinciden", "Por favor intente de nuevo");
        }
        else{
            const newUser = {
                "email": email,
                "password": password,
                "name": name,
                "lastname": lastname
            }
            registerUser(newUser)
        }
    }

    return (
        <>
            {successReg ? 
            <Redirect to="/" /> : 
            <div className="login_container">
                <div className="card_login">
                    <div className="login_form">
                        <img src="/logo-batman.png" alt=""/>
                        <h4>Registrate</h4>
                        <p>
                            ¿Ya tienes cuenta? <Link to="/login">Log in</Link>
                        </p>
                        <form  onSubmit={onSubmit} method="post">
                            <label htmlFor="name">Nombre</label>
                            <input 
                            id="name" 
                            type="text" 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            />

                            <label htmlFor="lastname">Apellido</label>
                            <input 
                            id="lastname" 
                            type="text" 
                            value={lastname}
                            onChange={e => setLastname(e.target.value)}
                            required
                            />

                            <label htmlFor="email">Email</label>
                            <input 
                            id="email" 
                            type="email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            />

                            <label htmlFor="password">Contraseña</label>
                            <input 
                            id="password" 
                            type="password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            />

                            <label htmlFor="password2">Confirma tu contraseña</label>
                            <input 
                            id="password2" 
                            type="password" 
                            value={password2}
                            onChange={e => setPassword2(e.target.value)}
                            required
                            />
                            
                            <button type="submit">Registrate</button>
                            
                        </form>
                    </div>

                    <div className="login_image">
                        <img src="/login-img.png" alt=""/>
                    </div>
                </div>
            </div>}
        </>
    )
}