import React, { useState, useEffect } from 'react'
import { getToken, deleteToken } from '../utils/Auth'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import '../styles/Account.css'
import '../styles/Login.css'

const ApiUrl = process.env.REACT_APP_APIURL

export default function Account() {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [accountId, setAccountId] = useState('')
    const history = useHistory()

    useEffect(() => {
        async function cargarUsuario() {
            let config = {
                headers: { Authorization: `Bearer ${getToken()}` }
            };
            
            let res = await axios.get(`${ApiUrl}/api/users/auth`, config)
            if(res.data.isAuth){
                setName(res.data.user.name)
                setLastname(res.data.user.lastname)
                setEmail(res.data.user.email)
                setAccountId(res.data.user.id)
            }else{
                deleteToken()
            }  
        }
        cargarUsuario()
    }, [])

    const registerUser = async(userData) => {
        let config = {
            headers: { Authorization: `Bearer ${getToken()}` }
        };
        let res = await axios.put(`${ApiUrl}/api/users/${accountId}`, userData, config)
        if(res.data.success){
            history.push("/dashboard");
        }
    };

    const onSubmit = e => {
        e.preventDefault()
        const logUser = {
            "name": name,
            "lastname": lastname,
            "email": email
        }
        registerUser(logUser)
    }

    return (
        <div className="login_container">
            <div className="card_login">
                <div className="login_form">
                    <img src="/logo-batman.png" alt=""/>
                    <h4>Mi cuenta</h4>
                    <p>Modificación de datos</p>
                    <form  onSubmit={onSubmit} method="post">
                        <label htmlFor="name">Nombre</label>
                        <input 
                        id="name" 
                        type="name" 
                        placeholder="Nombre"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                        <label htmlFor="lastname">Apellido</label>
                        <input 
                        id="lastname" 
                        type="lastname" 
                        placeholder="Apellido"
                        value={lastname}
                        onChange={e => setLastname(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                        <input 
                        id="email" 
                        type="email" 
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />

                        <button type="submit">Actualizar</button>
                    </form>
                    <p><Link to="/pass">Modificar contraseña</Link></p>
                </div>
                <div className="login_image">
                    <img src="/login-img.png" alt=""/>
                </div>
            </div>
        </div>
    )
}
