import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Burger from 'react-css-burger';
import '../styles/Navbar.css'

export default function Navbar() {
    const [active, setActive] = useState(false)

    const hamburger = () => {
        var x = document.getElementById("hamburger");
        if (!active) {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

    return (
        <nav>
            <div className="main_logo">
                <Link to="/">
                    <img src="/logo-batman.png" alt="Logo"/>
                </Link>
            </div>
            <ul className="desk_menu">
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

            <div className="hamburger_menu">
                <Burger
                    onClick={() => {
                        hamburger()
                        setActive(!active)
                        }
                    }
                    active={active}
                    burger="elastic"
                    color="white"
                    hoverOpacity={0.8}
                    marginTop="0"
                />
                <ul className="mov_menu" id="hamburger">
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
            </div>
        </nav>
    )
}
