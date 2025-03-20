import styled from "styled-components";
import { Colors } from "../../utils/colors";
import { MessageType } from "../../models/Message";

export const MessageWrapper = styled.div<{ type: MessageType }>`
    background-color: ${ ({ type }) => (type === MessageType.SENT ? Colors.primary.main: Colors.secondary.main)};
    border-radius: ${ ({ type }) => (type === MessageType.SENT ? '5px 5px 0px  5px': '5px 5px 5px 0px')};
    color: white;
    padding: 5px;
    margin: 5px;
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    width: fit-content;
    font-size: 0.9rem;
    align-self: ${ ({ type }) => (type === MessageType.SENT ? 'flex-end': 'flex-start')} ;
`;

export const MessageContentWrapper = styled.p`
`;

export const DateWrapper = styled.p<{ type: MessageType }>`
    text-align: ${ ({ type }) => (type === MessageType.SENT ? 'end': 'start')};
    font-size: smaller;
`;