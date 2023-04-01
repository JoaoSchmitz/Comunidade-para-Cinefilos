import styled from "styled-components";

export const Main = styled.main`
    margin-top: 100px;
    margin-left: 10%;
    margin-right: 10%;
`

export const UserInformation = styled.div`
    display: flex;
    background-color: black;
    margin: 0;
    width: 100%;
    padding: 50px 40px;
    border-radius: 10px;

    margin-bottom: 50px;
`

export const UserIcon = styled.img`
    height: 200px;
    width: 200px;
`

export const Username = styled.span`
    color: var(--textColor);
`
export const Userdata = styled.div`
    display: flex;
    padding: 20px;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
`

export const Discrete = styled.span`
    font-size: 14px;
    color: var(--textColor2);
    opacity: .5;
`

export const ListTitle = styled.h3`
    color: var(--textColor2);
    font-size: 30px;
    font-weight: 100;
    text-align: center;

    border-top: 3px solid var(--textColor2);
    padding-top: 50px;
    margin-bottom: 50px;
`

export const Section = styled.section`
    margin-bottom: 100px;
`