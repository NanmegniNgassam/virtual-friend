import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const MessageWrapper = styled.p`
    background-color: ${Colors.primary.main};
    border-radius: 5px;
    color: white;
    padding: 5px;
    margin: 5px 0;
    max-width: 80%;
    width: fit-content;
    font-size: 0.9rem;
`;