import { Discussion } from "../../models/Message";
import MessageContainer from "../Message";
import { MessagesListWrapper } from "./messagesList.styles";

interface MessageListProps {
    messages: Discussion
}

const MessagesList = ({ messages }: MessageListProps) => {
    return (
        <MessagesListWrapper>
            <div className="chat-content">
                {
                    messages.map((message, index) => (
                        <MessageContainer message={message} key={index} />
                    ))
                }
            </div>
        </MessagesListWrapper>
    );
}
 
export default MessagesList;