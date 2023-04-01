import styled from "styled-components";

export const Container = styled.div`
    padding: 1em;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const Warning = styled.span`
    color: var(--textColor);
    font-size: 20px;
    display: block;
`

export const Text = styled.span`
    color: white;
    font-size: 14px;
    font-weight: 100;
    display: block;
`

export const Redirect = styled.span`
    color: var(--textColor);
`

export const StyledLink = styled.button`
    color: var(--textColor2);
    background-color: var(--mainColor);
    font-size: inherit;
    border: none;
    outline: none;
    cursor: pointer;
`