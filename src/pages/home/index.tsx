import { useState } from "react";
import MessagesList from "../../components/MessagesList";
import MobileHeader from "../../components/MobileHeader";
import TextZone from "../../components/TextZone";
import { Discussion, Message, MessageType } from "../../models/Message";
import { deleteCurrentDiscussion, generateNextMessageId, getDiscussionMessages, saveMessageInDiscussion } from "../../services/discussion";
import { MainContainer } from "./Home.styles";
import { interactWithAI } from "../../services/ai";
import { AgentStatus } from "../../models/AgentStatus";


const Home = () => {
    const [discussion, setDiscussion] = useState<Discussion>(getDiscussionMessages());
    const [agentStatus, setAgentStatus] = useState<AgentStatus>(AgentStatus.ONLINE);

    /**
     * Send a message into the discussion thread
     * 
     * @param message the actual message to add in the thread
     */
    const sendMessage = async (message: Message): Promise<void> => {
        // Update the current UI with the newly sent message and save it
        setDiscussion((prevMessages) => [...prevMessages, message]);
        saveMessageInDiscussion(message);

        // Set the agent in the thinking state
        setAgentStatus(AgentStatus.THINKING);

        // Interact with the agent to get an answer
        const replyContent = await interactWithAI();
        const reply:Message = {
            content: replyContent,
            id: generateNextMessageId(),
            repliedId: generateNextMessageId() - 1,
            sentAt: new Date(),
            type: MessageType.RECEIVED
        }

        // Let the agent get back in online status as the work is somehow done
        setAgentStatus(AgentStatus.ONLINE);

        // Update the current UI with the newly received message and save it
        setDiscussion((prevMessages) => [...prevMessages, reply]);
        saveMessageInDiscussion(reply);
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
                    status={agentStatus}
                />
                <MessagesList messages={discussion} />
                <TextZone addMessageToThread={sendMessage} />
            </MainContainer>
        </div>
    );
}
 
export default Home;