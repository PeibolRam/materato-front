import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Burger from 'react-css-burger';
import { getToken, deleteToken, deleteUserInfo } from '../utils/Auth'
import '../styles/Navbar.css'
import axios from 'axios'

const ApiUrl = process.env.REACT_APP_APIURL

export default function Navbar() {
    const [active, setActive] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function cargarUsuario() {
            if(!getToken()){
                setIsLogin(false)
                setLoading(false)
                return;
            }else {
                let config = {
                    headers: { Authorization: `Bearer ${getToken()}` }
                };
                
                let res = await axios.get(`${ApiUrl}/api/users/auth`, config)
                if(res.data.isAuth){
                    setIsLogin(true)
                    setLoading(false)
                }else{
                    console.log('kaka')
                }
            }
        }
        cargarUsuario()
    }, [])

    const hamburger = () => {
        var x = document.getElementById("hamburger");
        if (!active) {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }

    return (
        <>
        {
            loading ? 
            <p>Cargando ...</p> :
            <nav>
                <div className="main_logo">
                    <Link to="/">
                        <img src="/logo-batman.png" alt="Logo"/>
                    </Link>
                </div>
                {
                    isLogin ?
                    <>
                        <ul className="desk_menu">
                            <li>
                                <Link to="/dashboard">
                                    Cursos
                                </Link>
                            </li>
                            <li>
                                <Link to="/cuenta">
                                    Mi cuenta
                                </Link>
                            </li>
                            <li>
                                <Link to="/" onClick={()=>{
                                    deleteToken()
                                    deleteUserInfo()
                                    }}>
                                    Log out
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
                                    <Link to="/dashboard">
                                        Cursos
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cuenta">
                                        Mi cuenta
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" onClick={()=>{
                                        deleteToken()
                                        deleteUserInfo()
                                        }}>
                                        Log out
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </> :
                    <>
                        <ul className="desk_menu">
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
                    </>
                }
                
            </nav>
        }   
        </>
    )
}
