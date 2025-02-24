import styled from "styled-components";

export const MainContainer = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    max-width: 450px;
    max-height: 800px;
    height: 70vh;
    aspect-ratio: 2/3;
    margin: 30px auto;
    overflow: hidden;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 600px) {
        gap: 5px;
        max-width: 92%;
    }
`