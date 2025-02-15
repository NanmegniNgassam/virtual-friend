import styled from "styled-components";

export const HeaderContainer = styled.div`
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width: 600px) {
        padding: 10px 20px;
        align-items: center;
    }
`;

export const BrandContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    .app-name {
        font-size: 3rem;
        display: flex;
        p::first-letter {
            color: royalblue
        }
    }
    @media screen and (max-width: 600px) {
        gap: 5px;
        img {
            width: 50px;
            aspect-ratio: 1/1;
        }
    }
    
`

export const TimeContainer = styled.div`
    border: 1px solid royalblue;
    text-align: end;
`