import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const HeaderContainer = styled.div`
    font-family: Hylia;
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
    align-items: stretch;
    .app-name {
        font-size: 2.5rem;
        display: flex;
        color: ${Colors.primary};
        letter-spacing: 0.15rem;
        p::first-letter {
            color: ${Colors.secondary}
        }
    }
    @media screen and (max-width: 600px) {
        gap: 5px;
        img {
            width: 50px;
            aspect-ratio: 1/1;
        }
        .app-name {
            flex-direction: column;
            font-size: 1.7rem;
            line-height: 1.7rem;
        }
    }
    
`

export const TimeContainer = styled.div`
    text-align: end;
    font-size: 1.2rem;
    @media screen and (max-width: 600px) {
        font-size: 1rem;
    }
`