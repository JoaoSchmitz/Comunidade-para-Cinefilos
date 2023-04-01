import styled from "styled-components";

export const MovieListContainer = styled.div`
    text-align: center;
    margin: 2em 6%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 2rem;
    row-gap: 2rem;
`