import MobileHeader from "../../components/MobileHeader";
import TextZone from "../../components/TextZone";
import { MainContainer } from "./Home.styles";

const Home = () => {
    return (
        <div>
            <MainContainer>
                <MobileHeader />
                <TextZone />
            </MainContainer>
        </div>
    );
}
 
export default Home;