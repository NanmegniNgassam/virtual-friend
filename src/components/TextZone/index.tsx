import SendIcon from '@mui/icons-material/Send';
import { Avatar } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { InputZone, TextZoneContainer } from './TextZone.styles';
import { useState } from 'react';

const TextZone = () => {
    const [text, setText] = useState<string>('')
    const [image, setImage] = useState<string>('')

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
                {
                    (!text || text.length === 0) 
                    && <CameraAltIcon sx={{ cursor: 'pointer', '&:hover': { color: 'primary.dark' } }} color='primary' aria-label='selecting the image to send as message' />
                }
            </InputZone>
            <Avatar 
                sx={{
                    bgcolor: text || image ? 'primary.main' : 'primary.light', 
                    cursor: 'pointer', 
                    '&:hover': {
                        bgcolor: text || image ? 'primary.dark' : 'primary.light' 
                    }    
                }}
                onClick={() => {
                    if(!text)
                        return;
                    
                    sendMessage(text);
                    // Empty all the assets once sent
                    setText('');
                    setImage('');
                }}
            >
                <SendIcon sx={{ color: 'white' }} aria-label='sending the current message'/>
            </Avatar>
        </TextZoneContainer>
    );
}
 
export default TextZone;