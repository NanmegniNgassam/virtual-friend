import SendIcon from '@mui/icons-material/Send';
import { Avatar } from '@mui/material';
import { Dispatch, useState } from 'react';
import { InputZone, TextZoneContainer } from './TextZone.styles';
import { Discussion, Message, MessageType } from '../../models/Message';

interface TextZoneProps {
    setMessages: Dispatch<React.SetStateAction<Discussion>>;
}

const TextZone = ({ setMessages }: TextZoneProps) => {
    const [text, setText] = useState<string>('')

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
                onClick={() => {
                    if(!text)
                        return;

                    const message:Message = {
                        repliedId: null,
                        id: 1,
                        content: text,
                        sendingDate: new Date(),
                        type: MessageType.SENT
                    }
                    
                    setMessages((prevMessages) => [...prevMessages, message])
                    // Remove the sent message from the text zone
                    setText('');
                }}
            >
                <SendIcon sx={{ color: 'white' }} aria-label='sending the current message'/>
            </Avatar>
        </TextZoneContainer>
    );
}
 
export default TextZone;