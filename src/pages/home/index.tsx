import { useState } from "react";
import MessagesList from "../../components/MessagesList";
import MobileHeader from "../../components/MobileHeader";
import TextZone from "../../components/TextZone";
import { Discussion, Message } from "../../models/Message";
import { getDiscussionMessages } from "../../services/discussion";
import { MainContainer } from "./Home.styles";


const Home = () => {
    const [discussion, setDiscussion] = useState<Discussion>(getDiscussionMessages());

    /**
     * Send a message into the discussion thread
     * 
     * @param message the actual message to add in the thread
     */
    const sendMessage = (message: Message): void => {
        setDiscussion((prevMessages) => [...prevMessages, message])
    }

    return (
        <div>
            <MainContainer>
                <MobileHeader />
                    <MessagesList messages={discussion} />

                <TextZone addMessageToThread={sendMessage} />
            </MainContainer>
        </div>
    );
}
 
export default Home;