import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <div className="main_logo">
                <Link to="/">
                    <img src="/logo-batman.png" alt="Logo"/>
                </Link>
            </div>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/registrate">
                        Registrate
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
