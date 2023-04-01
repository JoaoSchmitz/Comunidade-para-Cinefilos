import { Link } from 'react-router-dom'
import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0 20px;
`

export const Text = styled.span`
    margin-left: 15px;
`

export const StyledLink = styled(Link)`
    color: var(--textColor);
    font-size: 18px;
    margin: 5px 10px;

    &:hover{
        text-decoration: underline;
    }
`