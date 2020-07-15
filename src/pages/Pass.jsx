import React, { useState, useEffect } from 'react'
import { getToken, deleteToken } from '../utils/Auth'
import { useHistory } from "react-router-dom";
import swal from 'sweetalert'
import axios from 'axios'
import '../styles/Login.css'

const ApiUrl = process.env.REACT_APP_APIURL


export default function Pass() {
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [accountId, setAccountId] = useState('')
    const [email, setEmail] = useState('')
    const history = useHistory();

    useEffect(() => {
        async function cargarUsuario() {
            let config = {
                headers: { Authorization: `Bearer ${getToken()}` }
            };
            
            let res = await axios.get(`${ApiUrl}/api/users/auth`, config)
            if(res.data.isAuth){
                setAccountId(res.data.user.id)
                setEmail(res.data.user.email)
            }else{
                deleteToken()
            }  
        }
        cargarUsuario()
    }, [])

    const changePass = async(userData) => {
        let config = {
            headers: { Authorization: `Bearer ${getToken()}` }
        };
        let res = await axios.put(`${ApiUrl}/api/users/pass/${accountId}`, userData, config)
        if(res.data.success){
            history.push("/dashboard");
        }else{
            swal("Algo salió mal :(")
        }
    };

    const onSubmit = e => {
        e.preventDefault()
        const logUser = {
            "password": password,
            "email": email
        }
        if(password !== password2){
            swal("Las contaseñas no coinciden, por favor intente de nuevo");
        }
        else{
            changePass(logUser)
        }
    }


    return (
        <div className="login_container">
            <div className="card_login">
                <div className="login_form">
                    <img src="/logo-batman.png" alt=""/>
                    <h4>Mi cuenta</h4>
                    <p>Modificación de contraseña</p>
                    <form  onSubmit={onSubmit} method="post">
                    
                        <label htmlFor="password">Nueva contraseña</label>
                        <input 
                        id="password" 
                        type="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />

                        <label htmlFor="password2">Confirma tu nueva contraseña</label>
                        <input 
                        id="password2" 
                        type="password" 
                        value={password2}
                        onChange={e => setPassword2(e.target.value)}
                        />
                        
                        <button type="submit">Cambiar contraseña</button>

                    </form>

                </div>
                <div className="login_image">
                    <img src="/login-img.png" alt=""/>
                </div>
            </div>
        </div>
    )
}
