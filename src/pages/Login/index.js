import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import * as C from './style'

const Login = () => {

    const { createSession } = useAuth()

    useEffect(() => {
        createSession()
    })

    return (
        <C.Main>
            <div>O login foi realizado com sucesso!</div>
            <Link to="/profile">Acessar sua conta</Link>
        </C.Main>
    )
}

export default Login