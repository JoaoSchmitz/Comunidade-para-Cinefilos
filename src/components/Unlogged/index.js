import React from 'react'
import * as C from './style'
import useAuth from '../../hooks/useAuth'

const Unlogged = () => {
    const { requestSession } = useAuth()

  return (
    <C.Container>
        <C.Text>
            Não tem nada aqui...
        </C.Text>
        <C.Warning>
            Parece que você não está conectado a nenhuma conta :(
        </C.Warning>
        <C.Redirect>
            <C.StyledLink onClick={requestSession}>Clique aqui</C.StyledLink> para se conectar a sua conta TMDB!
        </C.Redirect>
    </C.Container>
  )
}

export default Unlogged