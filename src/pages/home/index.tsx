import { useState } from "react";
import MessagesList from "../../components/MessagesList";
import MobileHeader from "../../components/MobileHeader";
import TextZone from "../../components/TextZone";
import { Discussion, Message } from "../../models/Message";
import { deleteCurrentDiscussion, getDiscussionMessages, saveMessageInDiscussion } from "../../services/discussion";
import { MainContainer } from "./Home.styles";


const Home = () => {
    const [discussion, setDiscussion] = useState<Discussion>(getDiscussionMessages());

    /**
     * Send a message into the discussion thread
     * 
     * @param message the actual message to add in the thread
     */
    const sendMessage = (message: Message): void => {
        // Update the current UI with the newly sent message
        setDiscussion((prevMessages) => [...prevMessages, message]);

        // Add the newly sent message into the stored discussion
        saveMessageInDiscussion(message);
    }

    /**
     * Delete all the messages sent locally and in the storage
     */
    const deleteAllMessages = ():void => {
        setDiscussion([]);

        deleteCurrentDiscussion();
    }

    return (
        <div>
            <MainContainer>
                <MobileHeader 
                    deleteAllMessages={deleteAllMessages} 
                    isMessages={discussion.length ? true : false} 
                />
                <MessagesList messages={discussion} />
                <TextZone addMessageToThread={sendMessage} />
            </MainContainer>
        </div>
    );
}
 
export default Home;