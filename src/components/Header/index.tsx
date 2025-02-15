import logo from "../../assets/images/logo.png";
import { BrandContainer, HeaderContainer, TimeContainer } from "./header.styles";

const Header = () => {
    const currentTime = new Date();

    setInterval(() => {

    }, 1*1000)

    return (
        <HeaderContainer>
            <BrandContainer>
                <img src={logo} alt="Branding image refering to the app provider" />
                <div className="app-name"><p>Virtual</p> <p>Friend.</p></div>
            </BrandContainer>
            <TimeContainer>
                <p className="day-time">
                    { currentTime.toLocaleDateString('en-GB').split('/').join('-') }
                </p>
                <p className="hour-time">
                    { currentTime.toLocaleTimeString('en-GB').split(':').slice(0, 2).join(':') }
                </p>
            </TimeContainer>
        </HeaderContainer>
    );
}
 
export default Header;