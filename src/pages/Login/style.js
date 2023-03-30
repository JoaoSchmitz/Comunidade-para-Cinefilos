import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
    margin: 20% 10% 0;
`

export const Mensagem = styled.span`
    font-size: 45px;
    display: block;
    font-weight: bold;
    margin-bottom: 30px;
`

export const Redirecionar = styled.span`
    font-size: 30px;
`

export const StyledLink = styled(Link)`
    color: var(--textColor2);

    &:hover{
        text-decoration: underline;
    }
`