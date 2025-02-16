import { Settings } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar/Avatar";
import { Link } from "react-router-dom";
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
                <UserNameLayout>FRIEND_NAME</UserNameLayout>
                <OnlineStatus>STATUS</OnlineStatus>
            </TextContainer>
            <Link to="/settings">
                <Settings sx={{ width: 30, height: 30, cursor: 'pointer'}} color="secondary"  />
            </Link>
            
        </MobileHeaderContainer>
    );
}
 
export default MobileHeader;