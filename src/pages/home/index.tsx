import { MainContainer, UsePolicyText } from "./Home.styles";

const Home = () => {
    return (
        <div>
            <MainContainer>
                <div>
                    <p>Welcome on the home page.</p>
                </div>
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