import { AgentStatus } from "../../models/AgentStatus";
import { Discussion } from "../../models/Message";
import { messagesListId } from "../../utils/messagesList";
import MessageContainer from "../Message";
import MessageSkeleton from "../MessageSkeleton";
import { ChatContainer, MessagesListWrapper } from "./messagesList.styles";

interface MessageListProps {
    messages: Discussion,
    status: AgentStatus
}

const MessagesList = ({ messages, status }: MessageListProps) => {
    return (
        <MessagesListWrapper id={messagesListId}>
            <ChatContainer>
                {
                    messages.map((message, index) => (
                        <MessageContainer message={message} key={index} />
                    ))
                }
                {
                    status === AgentStatus.THINKING && (
                        <MessageSkeleton />
                    )
                }
            </ChatContainer>
        </MessagesListWrapper>
    );
}
 
export default MessagesList;