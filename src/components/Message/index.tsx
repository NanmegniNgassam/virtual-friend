import { Message } from "../../models/Message";
import { MessageWrapper } from "./message.styles";

interface MessageContainerProps {
    message: Message
}

const MessageContainer = ( { message } : MessageContainerProps ) => {
    return (
        <MessageWrapper>
            {message.content}
        </MessageWrapper>
    );
}
 
export default MessageContainer;