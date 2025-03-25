import styled from "styled-components";
import { Colors } from "../../utils/colors";

export const MessagesListWrapper = styled.div`
    flex: 1;
    padding: 10px 10px 0 10px;
    display: flex;
    height: 500px;
    flex-direction: column;
    gap: 5px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: ${Colors.primary.main} #f1f1f1;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }
`

export const ChatContainer = styled.div`
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`;