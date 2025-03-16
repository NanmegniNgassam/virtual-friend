import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const MessageWrapper = styled.p`
    background-color: ${Colors.primary.main};
    border-radius: 5px;
    color: white;
    padding: 5px;
    margin: 5px;
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    width: fit-content;
    font-size: 0.9rem;
    align-self: flex-start;
`;

export const MessageContentWrapper = styled.div`
`;

export const DateWrapper = styled.p`
    text-align: start;
    font-size: smaller;
`;