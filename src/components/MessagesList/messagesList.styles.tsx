import styled from "styled-components";

export const MessagesListWrapper = styled.div`
    flex: 1;
    padding: 10px;
    display: flex;
    height: 500px;
    flex-direction: column;
    gap: 5px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }
    .chat-content {
        position: relative;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
`