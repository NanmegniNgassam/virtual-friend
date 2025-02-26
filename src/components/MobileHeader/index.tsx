import Avatar from "@mui/material/Avatar/Avatar";
import logo from "../../assets/images/logo.png";
import { MobileHeaderContainer, OnlineStatus, TextContainer, UserNameLayout } from "./Header.styles";

const MobileHeader = () => {
    return (
        <MobileHeaderContainer>
            <Avatar
                alt="Remy Sharp"
                src={logo}
                sx={{ width: 50, height: 50, boxShadow: 3}}
            />
            <TextContainer>
                <UserNameLayout>virtual friend</UserNameLayout>
                <OnlineStatus>status</OnlineStatus>
            </TextContainer>

            
        </MobileHeaderContainer>
    );
}
 
export default MobileHeader;