import SendIcon from '@mui/icons-material/Send';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import { InputZone, TextZoneContainer } from './TextZone.styles';

const TextZone = () => {
    const [text, setText] = useState<string>('')

    const sendMessage = (message: string): void => {
        // Implement the sending process
        console.log(message)
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
                onClick={() => {
                    if(!text)
                        return;
                    
                    sendMessage(text);
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