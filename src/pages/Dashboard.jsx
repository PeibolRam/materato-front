import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Dashboard.css'

export default function Dashboard() {
    return (
        <div className="container">
            <div className="my_courses">
                <h2>Mis cursos</h2>
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
