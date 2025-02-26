import { useState } from "react";
import MobileHeader from "../../components/MobileHeader";
import TextZone from "../../components/TextZone";
import { Discussion } from "../../models/Message";
import { getDiscussionMessages } from "../../services/discussion";
import { DiscussionContainer, MainContainer } from "./Home.styles";

const Home = () => {
    const [messages, setMessages] = useState<Discussion>(getDiscussionMessages());

    // TODO: Change setMessages by sendMessages
    return (
        <div>
            <MainContainer>
                <MobileHeader />
                <DiscussionContainer>
                    {
                        messages.map((message, index) => (
                            <p key={index}>{message.content}</p>
                        ))
                    }
                </DiscussionContainer>
                <TextZone setMessages={setMessages} />
            </MainContainer>
        </div>
    );
}
 
export default Home;