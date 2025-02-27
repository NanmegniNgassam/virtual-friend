import SendIcon from '@mui/icons-material/Send';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import { Message, MessageType } from '../../models/Message';
import { InputZone, TextZoneContainer } from './TextZone.styles';

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
            id: 0,
            content: text,
            sentAt: new Date(),
            type: MessageType.SENT
        }
        addMessageToThread(message)
        
        // Remove the sent message from the text zone
        setText('');
    } 

    return (
        <TextZoneContainer>
            <InputZone>
                <input 
                    className='typing-area'
                    value={text}
                    onChange={(event) => setText(event.target.value)}
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