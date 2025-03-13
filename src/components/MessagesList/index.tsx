import { Discussion } from "../../models/Message";
import MessageContainer from "../Message";
import { ChatContainer, MessagesListWrapper } from "./messagesList.styles";

interface MessageListProps {
    messages: Discussion
}

const MessagesList = ({ messages }: MessageListProps) => {
    return (
        <MessagesListWrapper>
            <ChatContainer>
                {
                    messages.map((message, index) => (
                        <MessageContainer message={message} key={index} />
                    ))
                }
            </ChatContainer>
        </MessagesListWrapper>
    );
}
 
export default MessagesList;