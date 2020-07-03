import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/Home.css'

export default function Home() {
    return (
        <div className="home">
            <div className="hero">
                <div className="shadow_back">
                    <h1>Aprende desde la comodidad de tu casa</h1>
                    <Link to="/registrate">Registrate</Link>
                </div>
            </div>
            <div className="our_courses">
                <h2>Nuestros cursos</h2>
                <div className="courses">
                    <div className="video_home">
                        Poner video de bienvenida aqui
                    </div>
                    <div className="courses_list">
                        <ul>
                            <li>Cursito bonito 1</li>
                            <li>Cursito bonito 2</li>
                            <li>Cursito bonito 3</li>
                            <li>Cursito bonito 4</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
