import styled from "styled-components";

export const MainContainer = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    max-width: 420px;
    max-height: 800px;
    height: 70vh;
    aspect-ratio: 2/3;
    margin: 30px auto;
    @media screen and (max-width: 600px) {
        gap: 5px;
    }
`

export const UsePolicyText = styled.p`
    text-align: center;
`