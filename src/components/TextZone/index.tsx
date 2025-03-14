import SendIcon from '@mui/icons-material/Send';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import { Message, MessageType } from '../../models/Message';
import { InputZone, TextZoneContainer } from './TextZone.styles';
import { generateNextMessageId } from '../../services/discussion';

interface TextZoneProps {
    addMessageToThread: (message: Message) => void;
}

const TextZone = ({ addMessageToThread }: TextZoneProps) => {
    const [text, setText] = useState<string>('');

    /**
     * Send the message entered to the thread
     */
    const sendMessage = ():void => {
        if(!text)
            return;

        // Make an object of actual type Message and send it
        const message:Message = {
            repliedId: null,
            id: generateNextMessageId(),
            content: text,
            sentAt: new Date(),
            type: MessageType.SENT
        }
        addMessageToThread(message)
        
        // Remove the sent message from the text zone
        setText('');
    }

    /**
     * Add interactivity to message typing (sending on 'Enter' press)
     * 
     * @params currentEntry: the current key pressed
     */
    const updateMessageEntry = (currentEntry: string): void => {
        if (currentEntry === 'Enter') 
            sendMessage()
    }

    return (
        <TextZoneContainer>
            <InputZone>
                <input 
                    className='typing-area'
                    value={text}
                    onChange={(event) => setText(event.target.value.trim())}
                    onKeyDown={(event) => updateMessageEntry(event.key)}
                    aria-label='Type the text you want to send as message' 
                />
            </InputZone>
            <Avatar 
                sx={{
                    bgcolor: text ? 'primary.main' : 'primary.light', 
                    cursor: 'pointer', 
                    '&:hover': {
                        bgcolor: text ? 'primary.dark' : 'primary.light' 
                    }    
                }}
                onClick={sendMessage}
            >
                <SendIcon sx={{ color: 'white' }} aria-label='sending the current message'/>
            </Avatar>
        </TextZoneContainer>
    );
}
 
export default TextZone;