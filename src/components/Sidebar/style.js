import styled from "styled-components";

export const SideContainer = styled.ul`
    display: flex;
    flex-direction: column;

    list-style-type: none;

    position: fixed;
    top: 0px;
    left: 0;

    height: 100%;
    width: 200px;
    background-color: var(--thirdColor);
    animation: showSidebar .4s;

    > svg {
        position: fixed;
        color: var(--textColor);
        width: 30px;
        height: 30px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;

        transition: .3s;
    }

    > svg:hover{
        color: var(--textColor2);
    }

    @keyframes showSidebar {
        from {
            opacity: 0;
            width: 0;
        } to {
            opacity: 1;
            width: 300ox;
        }
    }
`

export const Item = styled.li`
    padding: 10px 5px;
`

export const Container = styled.div`
    margin-top: 80px;

`