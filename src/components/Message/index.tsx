import { Message } from "../../models/Message";
import { DateWrapper, MessageContentWrapper, MessageWrapper } from "./message.styles";

interface MessageContainerProps {
    message: Message
}

/**
 * Format a date into 'HH:MM' disposition
 * 
 * @param date the date to convert
 * @returns the date corresponding form in 'HH:MM' string
 */
const formatDate = (date: Date):string => {
    const localTime = new Date(date).toLocaleTimeString('en-GB');

    // Remove the seconds value before returning
    const newLocalTime = localTime.split(':').slice(0, 2).join(':');

    return newLocalTime;
}

const MessageContainer = ( { message } : MessageContainerProps ) => {
    return (
        <MessageWrapper type={message.type}>
            <MessageContentWrapper>
                {message.content}
            </MessageContentWrapper>
            <DateWrapper type={message.type}>
                { formatDate(message.sentAt) }
            </DateWrapper>
        </MessageWrapper>
    );
}
 
export default MessageContainer;