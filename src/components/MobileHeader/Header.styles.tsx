import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const MobileHeaderContainer = styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    box-shadow: 1px 1px 8px gray;
    gap: 10px;
`

export const TextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const UserNameLayout = styled.p`
    text-transform: capitalize;
    font-weight: 500;
    font-size: 1.2rem;
`

export const OnlineStatus = styled.p`
    font-size: 0.9rem;
    text-transform: capitalize;
    color: ${Colors.primary.dark};
`