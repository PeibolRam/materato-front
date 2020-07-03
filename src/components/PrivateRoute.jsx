import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '../utils/Auth'
import axios from 'axios'

const ApiUrl = process.env.REACT_APP_APIURL

const PrivateRoute = ({component: Component, ...rest}) => {
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
                console.log(res)
                if(res.data.isAuth){
                    setIsLogin(true)
                    setLoading(false)
                }
            }
        }

        cargarUsuario()
    }, [])

    return (
        <>
            {
                loading ?
                <p>Cargando ...</p> :
                <Route {...rest} render={props => (
                    isLogin ?
                        <Component {...props} />
                    : <Redirect to="/login" />
                )} />
            }
        </>
        
    );
};

export default PrivateRoute;