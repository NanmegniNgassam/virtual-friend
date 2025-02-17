import SendIcon from '@mui/icons-material/Send';
import { Avatar } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { InputZone, TextZoneContainer } from './TextZone.styles';

const TextZone = () => {
    return (
        <TextZoneContainer>
            <InputZone>
                <input className='typing-area' aria-label='The text message you want to send' />
                <CameraAltIcon sx={{ cursor: 'pointer' }} color='primary' />
            </InputZone>
            <Avatar sx={{
                bgcolor: 'primary.main', 
                cursor: 'pointer', 
                '&:hover': {
                    bgcolor: 'primary.dark'
                }
            }}>
                <SendIcon sx={{ color: 'white' }} aria-label='sending the current message'/>
            </Avatar>
        </TextZoneContainer>
    );
}
 
export default TextZone;