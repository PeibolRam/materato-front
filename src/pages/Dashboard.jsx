import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getToken, deleteToken } from '../utils/Auth'
import axios from 'axios'

import '../styles/Dashboard.css'

const ApiUrl = process.env.REACT_APP_APIURL

export default function Dashboard() {
    const [name, setName] = useState('')

    useEffect(() => {
        async function cargarUsuario() {
            let config = {
                headers: { Authorization: `Bearer ${getToken()}` }
            };
            
            let res = await axios.get(`${ApiUrl}/api/users/auth`, config)
            if(res.data.isAuth){
                setName(res.data.user.name)
            }else{
                deleteToken()
            }  
        }
        cargarUsuario()
    }, [])

    return (
        <div className="container">
            <div className="my_courses">
                <h1>Hola {name}</h1>
                <h2>¿Que vamos a aprender hoy?</h2>
                <h3>Mis cursos</h3>
                <div className="grid_courses">
                    <Link to="dashboard" className="course">
                        <img src="/logo-curso.jpg" alt=""/>
                        <p>Cursito bonito 1</p>
                    </Link>
                    <Link to="dashboard" className="course">
                        <img src="/logo-curso.jpg" alt=""/>
                        <p>Cursito bonito 2</p>
                    </Link>
                    <Link to="dashboard" className="course">
                        <img src="/logo-curso.jpg" alt=""/>
                        <p>Cursito bonito 3</p>
                    </Link>
                    <Link to="dashboard" className="course">
                        <img src="/logo-curso.jpg" alt=""/>
                        <p>Cursito bonito 4</p>
                    </Link>
                    <Link to="dashboard" className="course">
                        <img src="/logo-curso.jpg" alt=""/>
                        <p>Cursito bonito 5</p>
                    </Link>
                    <Link to="dashboard" className="course">
                        <img src="/logo-curso.jpg" alt=""/>
                        <p>Cursito bonito 6</p>
                    </Link>
                    <Link to="dashboard" className="course">
                        <img src="/logo-curso.jpg" alt=""/>
                        <p>Cursito bonito 7</p>
                    </Link>
                    <Link to="dashboard" className="course">
                        <img src="/logo-curso.jpg" alt=""/>
                        <p>Cursito bonito 8</p>
                    </Link>
                </div>
            </div>
            <div className="recomendation my_courses">
                <h2>Recomendaciones para ti</h2>
                <div className="grid_courses">
                    <Link to="dashboard" className="course">
                        <img src="/login-img.png" alt=""/>
                        <p>Cursito bonito 9</p>
                    </Link>
                    <Link to="dashboard" className="course">
                        <img src="/login-img.png" alt=""/>
                        <p>Cursito bonito 10</p>
                    </Link>
                    <Link to="dashboard" className="course">
                        <img src="/login-img.png" alt=""/>
                        <p>Cursito bonito 11</p>
                    </Link>

                </div>
                
            </div>
        </div>
    )
}
