import { Skeleton } from "@mui/material";
import styled from "styled-components";
import { MessageType } from "../../models/Message";

export const MessageSkeletonWrapper = styled(Skeleton)<{ type: MessageType }>`
    border-radius: ${ ({ type }) => (type === MessageType.SENT ? '5px 5px 0px  5px': '5px 5px 5px 0px')};
    padding: 5px;
    margin: 5px;
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    width: fit-content;
    align-self: ${ ({ type }) => (type === MessageType.SENT ? 'flex-end': 'flex-start')} ;
`;