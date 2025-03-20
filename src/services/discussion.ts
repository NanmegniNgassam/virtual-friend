import { Discussion, Message } from "../models/Message"

const LOCAL_STORAGE_KEY = "vf-local-discussion"
const LATEST_MESSAGES_LIMIT = 20;

/**
 * Fetch the whole content of the current discussion (incoming and outgoing messages)
 * 
 * @returns Discussion: An array of exchanged messages
 */
export const getDiscussionMessages = (): Discussion => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY)
    
    if(storedData) {
        const data: Discussion = JSON.parse(storedData);

        // Parse the sending Date from string date to the actual Date format
        const discussion: Discussion = data.map((message) => ({...message, sentAt: new Date(message.sentAt)}))

        return discussion;
    } else {
        // Initialize an empty discussion and save it
        const data: Discussion = [];
        storeDiscussion(data);

        return data;
    }
}

/**
 * Get the latest messages of the current discussion
 */
export const getLatestMessages = (): Discussion => {
    const discussion = getDiscussionMessages();

    return discussion.slice(-LATEST_MESSAGES_LIMIT);
}

/**
 * Save data in the storage system
 * 
 * @params data: the array of messages we'd like to save
 */
export const storeDiscussion = (data: Discussion):void => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

/**
 * Add the newly sent message into the storage system
 * 
 * @params message: the newly sent message
 */
export const saveMessageInDiscussion = (message: Message):void => {
    const currentDiscussion = getDiscussionMessages();
    const discussion = [...currentDiscussion, message];

    storeDiscussion(discussion);
}

/**
 * Generate the Id of the next message to be add in the discussion
 */
export const generateNextMessageId = (): number => {
    const discussion = getDiscussionMessages();
    
    return discussion.length;
}

/**
 * Delete the current whole discussion 
 */
export const deleteCurrentDiscussion = ():void => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
}

// Think about an evolve where we can send temporary messages (on a specified time window)