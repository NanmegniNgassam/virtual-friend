import MobileHeader from "../../components/MobileHeader";
import TextZone from "../../components/TextZone";
import { MainContainer, UsePolicyText } from "./Home.styles";

const Home = () => {
    return (
        <div>
            <MainContainer>
                <MobileHeader />
                <TextZone />
            </MainContainer>
            <UsePolicyText>
                Please consider the 
                <a href="https://openai.com/policies/usage-policies/" target="_blank"> OpenAI use policies </a>  
                while using the service
            </UsePolicyText>
        </div>
    );
}
 
export default Home;