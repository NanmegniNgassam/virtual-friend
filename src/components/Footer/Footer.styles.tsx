import styled from "styled-components";

export const FooterContainer = styled.div`
    display: flex;
    padding: 20px 40px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    p {
        text-align: center;
    }
    @media screen and (max-width: 600px) {
        padding: 10px 20px;
        gap: 5px;
    }
`

export const CatchWordTypographer = styled.p`
    font-size: 1.2rem;
`