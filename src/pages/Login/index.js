import React, { useEffect } from 'react'
import useAuth from '../../hooks/useAuth'
import * as C from './style'

const Login = () => {

    const { createSession } = useAuth()

    useEffect(() => {
        createSession()
    }, [])

    return (
        <C.Main>
            <C.Mensagem>O login foi realizado com sucesso!</C.Mensagem>
            <C.Redirecionar>
                <C.StyledLink to="/profile">Clique aqui</C.StyledLink> para acessar sua conta
            </C.Redirecionar>
        </C.Main>
    )
}

export default Login